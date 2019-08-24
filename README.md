# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

When you type in a given URL, your computer (the client) contacts a DNS (domain name server) to find the IP address that techtonic.com corresponds to.  Once the DNS has the right IP address, it sends it back to your browser, and your browser can figure out which server contains the information for techtonic.com.  The server (or the computer on which the code is stored) can then send your computer the code for that webpage, your computer receives it, and then your browser converts it to usable content.

Links used: https://wsvincent.com/what-happens-when-url/
https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works

## From start to finish, how does data reach you to be rendered in the browser?

1.) Your computer contacts the DNS to get the IP address of the website.
2.) The DNS looks at techtonic.com and says "here's the IP address connected to this webpage."
3.) Your computer (via your browser) reaches out to the server on the other end in which the code for that IP address is stored.
4.) The server begins sending the code to your browser (via small packets called bytes), and your browser begins assembling that code into a viewable page.
5.) In order for your browser to display a page, it must create a DOM (document object model) that allows it to interpret the content in the bytes.  The bytes are converted into characters, the characters are converted into tokens (which tells the browser what language the code is written in), the tokens are converted into nodes, which create a readable DOM for the browser to use.  A similar process is done if there is an indication in your code that CSS is used.  A CSSOM (CSS Operating Model) is created.

Links used: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works
https://blog.logrocket.com/how-browser-rendering-works-behind-the-scenes-6782b0e8fb10/

## What code is rendered in the browser?

Client-side code (such as HTML, CSS, and JavaScript) is rendered in your browser.

## What is the server-side code’s main function?

Server-side code dictates exactly which information will be sent to the client.  It allows for efficient storage and delivery of information (using databases), customizes the results that the client receives, and enables controlled access to content.

Links used: https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction

## What is the client-side code’s main function?

Client-side code is rendered by your browser and dictates the look, feel, and presentation of the webpage you're using.

Links used: https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction

## What is runtime?

Runtime is the period of time in which a program is running--or a machine is executing a code.  

Links used: https://blog.stackpath.com/runtime/

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

When a client accesses code and the browser displays it, you are viewing only the most current iteration of that code.  When you navigate away from that page, and then come back to it, or refresh the page, you have to ask for that code from the server again—which means you would be obtaining an updated iteration of that code each time you access the page.  In theory, there is an infinite number of possible instances of code, because a webpage can be visited an infinite number of times.

## How many instances of the server-side code are available at any given time?

At any given time, there is only one version of the webpage code available to a client—the most up-to-date version.  When a client computer asks the server for code, the server-side code that is executed is the current instance of that code only.

## How many instances of the databases connected to the server application are created?

If server-side code needs to access a database to provide information to the client, that database operates and exists separately from the code.  The code doesn’t change the database, it just accesses it, thus it isn’t creating a separate instance of that database.

Links used: https://searchsqlserver.techtarget.com/definition/database
