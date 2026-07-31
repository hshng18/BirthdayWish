HAPPY BIRTHDAY BHAVANA — WEBSITE
=================================

FOLDER STRUCTURE
----------------
bhavana-birthday/
├── index.html      -> Home page (hero + intro)
├── gallery.html     -> Photo gallery page
├── videos.html      -> Video page
├── notes.html       -> Letter + note cards
├── css/style.css    -> All styling
├── js/script.js     -> Photo/video lists + gallery logic
├── images/          -> PUT HER PHOTOS HERE
└── videos/          -> PUT HER VIDEOS HERE


HOW TO ADD PHOTOS
-----------------
1. Copy your photo files into the "images" folder.
   Example: images/beach-day.jpg

2. Open js/script.js in any text editor.

3. Find the PHOTOS list near the top and add a line for each photo:

   const PHOTOS = [
     { file: "images/beach-day.jpg", caption: "That perfect evening" },
     { file: "images/college-fest.jpg", caption: "Best day ever" },
   ];

4. Save the file. Open gallery.html — your photos will show up automatically,
   and clicking one opens it full-screen.


HOW TO ADD VIDEOS
------------------
1. Copy your video files (.mp4 works best) into the "videos" folder.

2. Open js/script.js and add a line to the VIDEOS list:

   const VIDEOS = [
     { file: "videos/her-laughing.mp4", caption: "The best sound in the world" },
   ];

3. Save. Open videos.html — they'll appear as playable video cards.


HOW TO EDIT THE TEXT
---------------------
- Nicknames on the home page: edit the three <span class="word"> lines in index.html.
- The letter: edit the text inside the <div class="letter"> block in notes.html.
- Note cards: copy/paste a <div class="note-card">...</div> block in notes.html
  and write your own title + message.


HOW TO VIEW THE SITE
----------------------
Just double-click index.html and it will open in your browser.
For the best experience (so images/videos always load correctly), you can
also open the folder in VS Code and use the "Live Server" extension, or run:

   python3 -m http.server 8000

...from inside the bhavana-birthday folder, then visit http://localhost:8000

Happy Birthday, Bhavana! 🌸
