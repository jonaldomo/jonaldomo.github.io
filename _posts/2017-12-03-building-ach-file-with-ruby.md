---
layout: posts
title: Building an ACH file with ruby
author: John Moses
tags: [ruby, blog, banking, ach]
categories: [blog]
permalink: /2017/12/03/building-ach-file-with-ruby.html
---

ACH files are used to transfer money between a "batch" of checking accounts to one checking account.  Gusto did a good set of blog posts to describe ACH files from a developer's perspective in detail if you want to understand some of the nitty gritty.

http://engineering.gusto.com/how-ach-works-a-developer-perspective-part-1/
http://engineering.gusto.com/how-ach-works-a-developer-perspective-part-2/
http://engineering.gusto.com/how-ach-works-a-developer-perspective-part-3/
http://engineering.gusto.com/how-ach-works-a-developer-perspective-part-4/

### Getting paid online

As a developer making an application and you want to get paid, primarily every where blog you read you should charge a credit card through Stripe or Braintree.

But when you accept credit cards you are paying around 3% a transaction, with ACH its a very low flat fee.  The fee is usually negotiable depending on who you are working with.  Stripe has functionality to do ACH but the end user has to supply their checking and routing account by logging into their bank account.

If you have checking and routing numbers and don't want to prompt users then you have to create an ACH file and upload it to your bank for them to process.

### Creating an ACH file

I am using Ruby on Rails for most of my web applications these days, so I will be building the ACH file with Ruby.  Knowing what I know from the ACH files from the Gusto post, I know I need to create the following: File Header, Batch Header, Batch Entries, Batch Footer, File Footer.

As of this posting from a few google searches I have a few options to create the ACH file in Ruby.  I know I can make it myself but I would rather use a library that someone has already ran through all the problems.  Stand on the should of giants they say.  Looks like there are really only two at the time of this writing to evaluate: Headache and jm81/ach

Here is my data that is going to be shared between the two implementations.


{% highlight ruby linenos %}
company = {
  :name => 'My Company',
  :bank_name => 'US Bank',
  :odfi_routing => '123456789',
  :odfi_account => '111111112',
}

reference = Time.now.strftime("%m%d%Y%H%M")

users = [{
  :routing_number => rand(9 ** 10),
  :account_number => rand(10 ** 10),
  :name => 'John',
  :id => 1
}, {
  :routing_number => rand(9 ** 10),
  :account_number => rand(10 ** 10),
  :name => 'Bob',
  :id => 2
}, {
  :routing_number => rand(9 ** 10),
  :account_number => rand(10 ** 10),
  :name => 'Jim',
  :id => 3
}]

{% endhighlight %}

### Using headache to generate an ACH file

#### Implementation

{% highlight ruby linenos %}
ach_doc = Headache::Document.new.tap do |document|
  document.header.tap do |file_header|
    file_header.destination_name = company[:bank_name]
    file_header.destination      = company[:odfi_routing]
    file_header.origin_name      = company[:name]
    file_header.origin           = company[:odfi_account]
    file_header.reference_code   = reference
  end

  document.batch.tap do |batch|
    batch.type                   = :credit
    batch.odfi_id                = company[:odfi_routing]
    batch.company_identification = company[:odfi_account]
    batch.batch_number           = 1
    batch.effective_date         = Date.today
    batch.company_name           = company[:name]
    batch.entry_description      = "#{company[:name]} Subscription"
    batch.entry_class_code       = 'PPD'

    users.each_with_index do |user, index|
      batch << Headache::Record::Entry.new.tap do |entry|
        entry.transaction_code = '22'
        entry.routing_number   = user[:routing_number]
        entry.account_number   = user[:account_number]
        entry.amount           = -49_99
        entry.individual_name  = user[:name]
        entry.trace_number     = "#{reference}#{index}"
        entry.internal_id      = user[:id]
      end
    end
  end
end
{% endhighlight %}

#### Output

You can generate output to file or to a string.  The underlying library to handle the output is fixy https://github.com/Chetane/fixy which is used for fixed width documents

```
101 123456789111111112 1712031344A094101US BANK                MY COMPANY             12032017
5220MY COMPANY                          111111112 PPDMY COMPANY171203171203   1123456780000001
6222104217478003341838       00000049991              JOHN                    01203201713440  
622274355610852990487        00000049992              BOB                     01203201713441  
6222281231308061797323       00000049993              JIM                     01203201713442  
82200000030071290048000000014997000000000000111111112                          123456780000001
9000001000001000000030071290048000000014997000000000000                                       
9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
```

Now that I have an output I can upload it to my bank or if I can find a bank that allows me to post the file directly to it through an API I can.  I will have to find one, for now manual is fine.

