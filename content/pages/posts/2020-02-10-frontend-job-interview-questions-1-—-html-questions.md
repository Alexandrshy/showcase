---
template: post
title: "Frontend Job Interview Questions #1 — HTML Questions"
slug: interview-questions-html
draft: false
date: 2019-08-17T05:03:34.404Z
tags:
  - interview
  - html
  - beginners
---

After you've scheduled interview date, many Frontend developers ask themselves _"What awaits me?"_ 🤔

This is happening because the world of Frontend development is very vast and includes both basic areas (HTML, CSS, JavaScript) and many specific topics (frameworks and libraries, various testing, graphics and animation and much more). In preparation for my own interview, I looked at a lot of resources. Some of which were better. Some that caused me only more questions, but the most useful for me was a list of questions [Front-end Developer Interview Questions](https://github.com/h5bp/Front-end-Developer-Interview-Questions) and I decided to work on it.

I want to write this series of notes to capture my own answers and maybe start an interesting discussion in the comments. But don't treat my answers as pure truth, I'm a regular developer who can be wrong😅

You can find the full list of question on [GitHub](https://github.com/h5bp/Front-end-Developer-Interview-Questions). The project is actively developing and you can become part of it.

## What does a `doctype` do?

`DOCTYPE` (Document Type Declaration) is an instruction to a browser about a version of the markup language in which a page is written. According to the HTML specification, each HTML document requires a `DOCTYPE` declaration indicating which version or standard of HTML is being used.

The `DOCTYPE` for HTML5 is case-insensitive and should be located at the beginning of the document.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title><!-- Title of your page --></title>
  </head>
  <body>
    <!-- Body of your page -->
  </body>
</html>
```

There's currently no reason to use the old declaration when creating new pages. However, you can still meet them in older projects.

### References

1. [W3C — Recommended Doctype Declarations to use in your Web document](https://www.w3.org/QA/2002/04/valid-dtd-list.html)
1. [HTML spec — The DOCTYPE](https://html.spec.whatwg.org/multipage/syntax.html#the-doctype)
1. [MDN — Doctype](https://developer.mozilla.org/en-US/docs/Glossary/Doctype)

## How do you serve a page with content in multiple languages?

Always use a language attribute on the HTML tag to declare the default language of the text in the page. Note that you should use the `html` element rather than the `body` to define the language because the `body` element doesn't cover the text inside the document's `head` element.

```html
<html lang="en">
  <head>
    <title><!-- Title of your page --></title>
  </head>
  <body>
    <!-- Body of your page -->
  </body>
</html>
```

When the page contains content in another language adds a language attribute to an element surrounding that content.

```html
<html lang="en">
  <head>
    <title><!-- Title of your page --></title>
  </head>
  <body>
    <p lang="fr">Texte français</p>
  </body>
</html>
```

To be sure that all user agents recognize which language you mean, you need to follow a standard approach when providing language attribute values. You can find a complete list of codes for various languages in this [registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry).

### References

1. [W3C — Declaring language in HTML](https://www.w3.org/International/questions/qa-html-language-declarations)
1. [MDN — Global attributes - lang](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang)
1. [Registry with languages](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry)

## What kind of things must you be wary of when design or developing for multilingual sites?

This's an extensive question and it can be approached from different angles. My opinion's that the best answer would be a few specific examples of what you personally came across. For example:

- Always declare the encoding of your document using a `meta` element with a `charset` attribute, or using the `http-equiv` and `content` attributes. The declaration should fit completely within the first 1024 bytes at the start of the file, so it's best to put it immediately after the opening `head` tag. For example:

```html
<html lang="en">
  <head>
    <title><!-- Title of your page --></title>
  </head>
  <meta charset="utf-8" />
</html>
```

or

```html
<html lang="en">
  <head>
    <title><!-- Title of your page --></title>
  </head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</html>
```

- Make sure that links on your site work correctly when you select different languages. If the content on your site isn't fully translated and some link leads to a page that is written in another language, it will be good practice to warn the user about it.

- Make sure that the images on your site are displayed correctly. If your site contains images with text, don't forget to make a separate copy of the images for all languages. However, this creates a number of difficult points that you will need to solve. First, you need to come up with a process in which images with all languages will be changed, minified and uploaded to the server. Secondly, you need to make sure that the user loads only those pictures that he needs. Don't allow a situation when the user uploads several identical pictures with translations of the text (until the user switches the language on site).

![Airbnb banner example](https://thepracticaldev.s3.amazonaws.com/i/nh1d65rypse35pbies9c.jpg)

<figcaption>Airbnb has a separate background image and on top of the text, which is translated depending on the selected language</figcaption>

Therefore, if possible, replace the images with text on clean images and overlay the text separately using HTML and CSS. It will be better for you and your users🙂

- You need to redirect users to the version of the site in their language, for this, use the user's system setting. But you cannot limit yourself to automatic language switching, always give the user the opportunity to change the language.

- Based on the previous point, it's important to make a convenient language switcher. It's good practice to make it a separate drop-down list with the label "Other languages". In my opinion, using a logo/flag/other graphical elements to change the language is bad practice, because a new user isn't familiar with your interface and he wants to quickly change the language and continue using your site.

![Airbnb language switcher](https://thepracticaldev.s3.amazonaws.com/i/2fwry03z7p3u0nx2lbg2.png)

<figcaption>Language switch in Airbnb</figcaption>

- Remember that not all languages are read the same way. For example, the languages spoken in the Middle East are read from right to left and you need to take this into account if your site supports these languages. You can add special classes and write styles to align text and blocks on the right side, but this isn't the best solution. It's good practice to set the direction of the text use the `dir` attribute with the value `rtl` (right to left). Because text direction is semantically tied to content and not to a presentation.

```html
<body>
  <p>
    This paragraph is in English and correctly goes left to right.
  </p>
  <p dir="rtl">
    هذه الفقرة باللغة العربية ولكن بشكل خاطئ من اليسار إلى اليمين.
  </p>
</body>
```

Read more on this topic by [Robert Dodis for Smashing Magazine](https://www.smashingmagazine.com/2017/11/right-to-left-mobile-design/).

- When you using masks for the phone (or any other) be sure that they work correctly for all types of numbers (but it's better don't use solutions that will limit the user), it will be very bad if the client leaves without leaving his data.

- Be sure that the user understands what you want from him. Make sure that all errors, warnings, tips or captcha (if you using your own text-based solutions) use the language that the user selected.

![Airbnb error message](https://thepracticaldev.s3.amazonaws.com/i/nadeu7xvw7oqs2aqk099.png)

<figcaption>Airbnb translates error messages according to the selected language</figcaption>

- You need to remember the differences in the date format. For example, in the UK and Europe, it’s common to format the date as date-month-year, whereas in the U.S. it’s formatted month-date-year. You may also need to translated units of measure, depending on your target audience. While 90% of the world uses the metric system, the U.S., Liberia, and Myanmar still use the Imperial system of weights and measures.

- Using icons also has a number of limitations. For example, icons indicating the direction will need to be expanded for languages that are readable from right to left. Some icons may seem offensive to people of some nationalities. And some icons may simply be incomprehensible to users because the development wasn't taken into account cultural characteristics. So think carefully about the choice of icons for your interface.

![Airbnb booking window](https://thepracticaldev.s3.amazonaws.com/i/twh62qdyqczyvom4ayxb.png)

<figcaption>Note the direction of the arrow on the booking screen</figcaption>

- Don't forget to inform the search engines about the alternative versions of your site. To do this, you need to use `hreflang` and `rel` attributes for the `link` element. The `hreflang` attribute descibes the language of the linked resource. And the `rel` attribute specifies the relationship of the target object to the link object.

```html
<link rel="alternate" href="http://example.com.de/" hreflang="de" />
<link rel="alternate" href="http://example.com.de/it/" hreflang="it" />
<link rel="alternate" href="http://example.com.de/es/" hreflang="es" />
<link rel="alternate" href="http://example.com.de/en/" hreflang="en" />
```

- Use culturally appropriate colors. Color plays a major role in the design, but you must also remember that the symbolism of color can vary from culture to culture. When you choosing a color for your multilingual sites, you should study [the article from the ShutterStock blog](https://www.shutterstock.com/blog/color-symbolism-and-meanings-around-the-world). This article will also answer the question: "Why are Twitter, Facebook, and LinkedIn so blue?"😀

- Check how all interface elements and content in different languages behave. A line of text written in one language can be much larger than in another. It isn't so scary in blocks with a lot of text (any multiline text will quietly survive a few new lines), but it can greatly affect on title, links, labels, or buttons. Check that the overflow doesn't break these elements, and gently transferred to a new line.

![The first screen of Airbnb in Arabic](https://thepracticaldev.s3.amazonaws.com/i/jjhvxf3gcxt67y8s2w8x.png)

<figcaption>The first screen of Airbnb in Arabic</figcaption>

![The first screen of Airbnb in Portuguese](https://thepracticaldev.s3.amazonaws.com/i/drqxma37z8ohe945vtbc.png)

<figcaption>The first screen of Airbnb in Portuguese</figcaption>

Just compare how the page changes when you change the language

- Check the readability of the text for all languages, perhaps for some of the languages should slightly increase or decrease the font size (especially be careful of Middle Eastern languages).

- Just repeat the previous answer earlier 😄 Always use the `lang` attribute for the `html` tag and when using a separate language for individual page elements, use `lang` attribute for these elements. For example:

```html
<html lang="en">
  <head>
    <title><!-- Title of your page --></title>
  </head>
</html>
```

- Use this [register](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) to write the correct language code for the `lang` attribute.

```html
<html lang="en">
  <head>
    <title><!-- Title of your page --></title>
  </head>
  <body>
    <p lang="fr">Texte français</p>
    <p lang="de">Deutscher text</p>
  </body>
</html>
```

I gave just a part of the tips and things that you should pay attention to when developing multilingual sites. If you have interesting articles on this theme, let me know and I'll add a link to them🙂

### References

1. [W3C — Declaring language in HTML](https://www.w3.org/International/questions/qa-html-language-declarations)
1. [W3C — Declaring character encodings in HTML](https://www.w3.org/International/questions/qa-html-encoding-declarations)
1. [MDN — Global attributes - lang](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang)
1. [MDN — Global attributes - dir](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir)
1. [Digital Guide — Article — hreflang: The HTML attribute for multilingual websites](https://www.ionos.com/digitalguide/online-marketing/search-engine-marketing/hreflang-basics-examples-and-common-errors/)
1. [ShutterStock — Article — Symbolism Of Colors And Color Meanings Around The World](https://www.shutterstock.com/blog/color-symbolism-and-meanings-around-the-world)
1. [Smashing Magazine — Article — Right-To-Left Development In Mobile Design](https://www.smashingmagazine.com/2017/11/right-to-left-mobile-design/)

## What are `data-*` attributes good for?

`data-*` this attribute was invented to standardize the storage of user data in HTML. You should use the data attribute only be used when there are no other appropriate HTML elements or attributes. Each HTML element can have any number of data attributes.

The most popular case for using data attributes is to use them in libraries or frameworks (for example, in libraries for testing Jest or Puppeteer).

### HTML syntax

The syntax is simple. Any data attribute consists of two elements:

1. The name of the attribute that comes after `data-` (must contain at least one character and may consist of several words that will be separated by a dash)
1. The value of the attribute (string)

This describes the section with three data attributes.

```html
<section
  class="blog"
  data-id="200"
  data-test="blog"
  data-test-value="attribute"
>
  ...
</section>
```

When using the data attribute, you need to consider a number of features:

1. All data stored in the data attribute will be ignored by search engines
1. The data isn't completely hidden and the user still has access to it through the code inspector in the browser

### JavaScript access

It's very easy to get data from data attribute via JavaScript. To do this you need to find the element using `querySelector`, then use the property `dataset` and read any data from the data attribute.

```js
const section = document.querySelector(".blog")

section.dataset.id // 200
section.dataset.test // blog
section.dataset.testValue // attribute
```

Note if you use a name for the data attribute consisting of two words, the dashes are converted to camelCase.

### References

1. [MDN — Using data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)
1. [MDN — Global attributes - data-\*](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*)

## What are the building blocks of HTML5?

An excellent answer to this question is given by [MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5). If you don't understand any of the points I advise you to also follow the link to [MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) and read an article in more details. You can also open [the HTML specification](https://html.spec.whatwg.org/multipage/) to read about new minor releases for HTML.

- Semantics. Allowing you to describe more precisely what your content is.
- Connectivity. Allowing you to communicate with the server in new and innovative ways.
- Offline and storage. Allowing webpages to store data on the client-side locally and operate offline more efficiently.
- Multimedia. making video and audio first-class citizens in the Open Web.
- 2D/3D graphics and effects. Allowing a much more diverse range of presentation options.
- Performance and integration. Providing greater speed optimization and better usage of computer hardware.
- Device access. Allowing for the usage of various input and output devices.
- Styling. Letting authors write more sophisticated themes.

### References

1. [MDN — HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
1. [Specification — HTML. Living Standard](https://html.spec.whatwg.org/multipage/)

## Conclusion

I think we should finish the first part. I also post this article in [repository](https://github.com/Alexandrshy/articles/tree/master/interview-questions) and will update it if necessary.

Please give me feedback on how interesting this topic is to you. Also, I will be glad if you share stories in the comments, how your interviews were, what questions you were asked, what tasks you were given to solve. I plan to consider not only questions from [the list](https://github.com/h5bp/Front-end-Developer-Interview-Questions) but also to discuss interesting questions from the comments and from my personal experience. In the future, I would also like to discuss some technical examples and approaches to their solution. But all this later 😁

## Reference to other community responses

1. [Repository @yangshun](https://github.com/yangshun/front-end-interview-handbook)
1. [Repository @utatti](https://github.com/utatti/Front-end-Developer-Interview-Questions-And-Answers)
1. [Repository @khan4019](https://github.com/khan4019/front-end-Interview-Questions)

For cover image thank you [Anas Alshanti](https://unsplash.com/@otenteko) on [Unsplash](https://unsplash.com/) 🤗

Thank you for your attention and have a nice day 👋
