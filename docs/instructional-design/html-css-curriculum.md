---
title: "HTML/CSS Curriculum"
---

:::info What this is
A five-part unit from an introductory web-development course — a lesson
plan, two HTML tag reference sheets, and two hands-on labs — covering the
first weeks of HTML fundamentals: document structure, text formatting,
hyperlinks, images, tables, lists, and inline CSS. Included as-is, down to
the period-accurate tooling (BBEdit Lite, Netscape Navigator, floppy
disks), because it demonstrates instructional design and curriculum
planning for a beginner audience, not current web practice.

**Provenance:** Dona Ana Community College, original materials, already
public — no de-identification needed.
:::

## Lesson Plan — Week 1: Introduction to HTML

### Course Context
Course: **Website Development I**
Institution: **Dona Ana Community College**
Term: Spring 2000
Instructor: Julie Chandler (Associate Professor)

This lesson introduces students to the World Wide Web and HTML, providing the foundation for building simple static web pages.
As this was an **introductory community college course**, pacing is intentionally slow and accessible to beginners.

---

### Learning Objectives
By the end of Week 1, students will be able to:
1. Explain what HTML is and its role in the World Wide Web.
2. Recognize the structure of a basic HTML document.
3. Create simple pages using headings, paragraphs, and hyperlinks.
4. Save and open HTML files in Internet Explorer and Netscape Navigator.

---

### Materials Needed
- Lab computers with **Mac OS 8/9**.
- Installed browsers: **Internet Explorer 5 (Mac)**, **Netscape Navigator 4.7**.
- Simple text editor (BBEdit Lite).
- Handouts: *HTML Quick Reference Sheet*.
- Floppy disks for saving assignments.

---

### Lesson Outline

#### 1. Introduction to the Web (30 minutes)
- History of the Internet and the WWW.
- Difference between a **browser** and a **server**.
- Demonstration: Visiting a webpage and viewing its source.

#### 2. HTML Basics (45 minutes)
- Structure of an HTML file: `<html>`, `<head>`, `<title>`, `<body>`.
- Importance of proper nesting and closing tags.
- Demonstration: Instructor creates a simple "Hello World" page in BBEdit.

#### 3. Hands-On Lab (60 minutes)
Students will:
1. Open BBEdit Lite.
2. Type the basic HTML template provided.
3. Add headings (`<h1>` to `<h3>`), a paragraph (`<p>`), and a hyperlink (`<a href="">`).
4. Save the file as `index.html`.
5. Open it in Netscape Navigator and Internet Explorer.

#### 4. Homework Assignment
- Expand the homepage by adding:
  - At least **3 paragraphs** introducing yourself.
  - **2 hyperlinks** to external websites.
- Save to floppy disk and bring to class next week.

---

### Assessment
- Lab participation (completing in-class exercise).
- Homework graded on:
  - Proper HTML structure.
  - Correct use of headings, paragraphs, and links.
  - File opens correctly in both browsers.

---

### Instructor Notes
- Students may struggle with saving files as `.html` instead of `.txt` — remind them to check file extensions.
- Encourage exploration of "View Source" in browsers to build confidence.
- Provide extra floppy disks for students who forget theirs.

---

© 2000 Dona Ana Community College — Course Materials by Julie Chandler

---

## HTML Tag Reference — Week 1

### Course Context
Course: **Website Development I**
Institution: **Dona Ana Community College**
Term: Spring 2000
Instructor: Julie Chandler (Associate Professor)

This reference sheet introduces students to the essential HTML tags covered during the first week of the course.
It is designed as a quick lookup guide for beginners working in BBEdit Lite on Mac OS.

---

### Document Structure

- `<html> ... </html>` — Defines the beginning and end of the HTML document.
- `<head> ... </head>` — Contains metadata, title, and references to scripts/styles.
- `<title> ... </title>` — Defines the text shown in the browser's title bar.
- `<body> ... </body>` — Contains all visible content on the page.

---

### Text Formatting

- `<h1> ... </h1>` — Main heading (largest).
- `<h2> ... </h2>` — Secondary heading.
- `<h3> ... </h3>` — Tertiary heading.
- `<p> ... </p>` — Paragraph of text.

---

### Hyperlinks

- `<a href="URL"> ... </a>` — Creates a hyperlink.
  - Example: `<a href="http://www.nmsu.edu">Visit NMSU</a>`

---

### Images

- `<img src="filename.gif" alt="description">` — Embeds an image.
  - Attributes:
    - **src** — path to the image file.
    - **alt** — alternate text for screen readers or if the image cannot load.

---

### Notes for Students
- Always close your tags (e.g., `</p>`).
- Use lowercase for consistency, though most browsers are case-insensitive.
- Save files with the extension `.html`.
- Test in both **Netscape Navigator 4.7** and **Internet Explorer 5 (Mac)**.

---

© 2000 Dona Ana Community College — Course Materials by Julie Chandler

---

## Lab — Using Images in HTML

### Course Context
Course: **Website Development I**
Institution: **Dona Ana Community College**
Term: Spring 2000
Instructor: Julie Chandler (Associate Professor)

This lab builds on Week 1 by introducing the `<img>` tag. Students practice embedding images into their web pages, controlling size, and providing alternative text.

---

### Learning Objectives
By the end of this lab, students will be able to:
1. Insert images into a webpage using the `<img>` tag.
2. Use attributes such as `src`, `alt`, `width`, and `height`.
3. Understand the importance of alternate text for accessibility.
4. Preview and troubleshoot image rendering in multiple browsers.

---

### Lab Instructions

#### Step 1 — Insert a Basic Image
1. Open your Week 1 homepage (`index.html`) in **BBEdit Lite**.
2. Add the following line inside the `<body>` section:
   ```html
   <img src="schoollogo.gif" alt="School Logo">
   ```
3. Save the file and open in **Netscape Navigator** and **Internet Explorer** to confirm the image appears.

#### Step 2 — Add Width and Height
1. Modify the image to include dimensions:
   ```html
   <img src="schoollogo.gif" alt="School Logo" width="200" height="100">
   ```
2. Experiment with different values to see how resizing affects the display.

#### Step 3 — Add a Second Image
1. Insert another image of your choice (from provided lab files).
   ```html
   <img src="desert.jpg" alt="Desert Landscape" width="300">
   ```
2. Save and reload in both browsers.

#### Step 4 — Alignment Experiment
1. Add a paragraph and place an image inside it.
2. Use the `align` attribute (`left` or `right`) to see how text flows around the image.

---

### Deliverable
- A webpage with **two images** (one logo, one photo).
- At least one image must include width/height attributes.
- Each image must include an **alt description**.
- Save your file as `week2_images.html` on your floppy disk.

---

### Notes for Students
- Ensure images are saved in the same folder as your HTML file.
- If the image doesn't appear, check for typos in the filename and extension.
- Use `.gif` or `.jpg` formats — PNG support is still limited in older browsers.

---

© 2000 Dona Ana Community College — Course Materials by Julie Chandler

---

## HTML Tag Reference — Week 3: Tables, Lists, and Intro to CSS1

### Course Context
Course: **Website Development I**
Institution: **Dona Ana Community College**
Term: Spring 2000
Instructor: Julie Chandler (Associate Professor)

This reference sheet expands upon Week 1 materials, introducing HTML tables, lists, and the first steps into inline CSS styling.

---

### Tables

- `<table> ... </table>` — Defines a table.
- `<tr> ... </tr>` — Table row.
- `<td> ... </td>` — Table data cell.
- `<th> ... </th>` — Table header cell (bold, centered by default).

**Example:**
```html
<table border="1">
  <tr>
    <th>Day</th>
    <th>Activity</th>
  </tr>
  <tr>
    <td>Monday</td>
    <td>Lecture</td>
  </tr>
  <tr>
    <td>Wednesday</td>
    <td>Lab</td>
  </tr>
</table>
```

---

### Lists

- `<ul> ... </ul>` — Unordered (bulleted) list.
- `<ol> ... </ol>` — Ordered (numbered) list.
- `<li> ... </li>` — List item.

**Example:**
```html
<ul>
  <li>Apples</li>
  <li>Oranges</li>
  <li>Bananas</li>
</ul>

<ol>
  <li>Step One</li>
  <li>Step Two</li>
</ol>
```

---

### Intro to CSS1 (Inline Styles)

- CSS (Cascading Style Sheets) allows for custom styling of HTML elements.
- In this course, we start with **inline styles** using the `style` attribute.

**Common Properties:**
- `color` — Sets text color.
- `font-size` — Sets text size.
- `background-color` — Sets background color.

**Example:**
```html
<h1 style="color: blue; background-color: yellow;">Welcome to Week 3</h1>
<p style="font-size: 14px; color: green;">This is styled text.</p>
```

---

### Notes for Students
- Inline styles apply only to the tag where they are written.
- Later in the course, we will learn about **external stylesheets** for better site-wide consistency.
- Be careful with color choices — some combinations may be hard to read.

---

© 2000 Dona Ana Community College — Course Materials by Julie Chandler

---

## Lab — Week 3: Schedule Table + List + Inline Styles

### Course Context
Course: **Website Development I**
Institution: **Dona Ana Community College**
Term: Spring 2000
Instructor: Julie Chandler (Associate Professor)

This lab reinforces Week 3 concepts by having students practice tables, lists, and inline CSS styles to create a simple personal schedule webpage.

---

### Learning Objectives
By the end of this lab, students will be able to:
1. Create an HTML table with headers and rows.
2. Create both ordered and unordered lists.
3. Apply inline CSS styles for color, font size, and background color.
4. Combine multiple elements on a single page.

---

### Lab Instructions

#### Step 1 — Build a Weekly Schedule Table
1. Open BBEdit Lite and create a new file called `week3_schedule.html`.
2. Insert the following table structure:
   ```html
   <table border="1">
     <tr>
       <th>Day</th>
       <th>Activity</th>
     </tr>
     <tr>
       <td>Monday</td>
       <td>Web Development Lecture</td>
     </tr>
     <tr>
       <td>Wednesday</td>
       <td>Lab Practice</td>
     </tr>
     <tr>
       <td>Friday</td>
       <td>Homework Review</td>
     </tr>
   </table>
   ```

#### Step 2 — Add a List of Favorite Websites
1. Below the table, create an unordered list of at least **three websites** you visit often.
   ```html
   <ul>
     <li>http://www.nmsu.edu</li>
     <li>http://www.cnn.com</li>
     <li>http://www.yahoo.com</li>
   </ul>
   ```

#### Step 3 — Apply Inline Styles
1. Add styles to headings and text. Example:
   ```html
   <h1 style="color: blue; background-color: yellow;">My Weekly Schedule</h1>
   ```
2. Apply `color` and `font-size` to at least one paragraph.

#### Step 4 — Save and Test
1. Save your file as `week3_schedule.html`.
2. Open it in both **Netscape Navigator 4.7** and **Internet Explorer 5 (Mac)**.
3. Confirm that the table, list, and styles appear correctly.

---

### Deliverable
- A webpage containing:
  - One **table** (weekly schedule).
  - One **unordered list** (favorite websites).
  - At least one **inline styled heading and paragraph**.

Save the completed file to your floppy disk and submit it during the next class session.

---

### Instructor Notes
- Some students may struggle with table formatting — remind them that `<tr>` defines rows and `<td>` defines cells.
- Inline CSS styles are new — provide examples and encourage experimentation.
- Validate that all students can open their files in both browsers.

---

© 2000 Dona Ana Community College — Course Materials by Julie Chandler

---

*Source and full repository: [instructional-design on GitHub](https://github.com/chandlerpm/instructional-design).*
