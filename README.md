Tech Assessment.

Requirements:
- Sign in using user's GitHub or Spotify Account.
- If GitHub, list the user's repositories. If Spotify, list the user's playlists/songs.
- No design given, UI/UX determined by developer.
- When a list item is pressed, user should be able to add a note.

---

## Home Page

<div>
  <img src="https://github.com/jentoobento/EchoBind/blob/master/home.jpg" width="200" height="400" style="float: left;"/>
</div>

## Authentication Flow (Github)
Redirect to third party site to login.

<div>
  <img src="https://github.com/jentoobento/EchoBind/blob/master/auth1.jpg" width="200" height="400" style="float: left;"/>
  <img src="https://github.com/jentoobento/EchoBind/blob/master/auth2.jpg" width="200" height="400" style="float: right;"/>
</div>

## List View of User Data, Responsive View
Scrollable list of user's data after the login. Design works with landscape view also.

<div>
  <img src="https://github.com/jentoobento/EchoBind/blob/master/listview.jpg" width="200" height="400" style="float: left;"/>
  <img src="https://github.com/jentoobento/EchoBind/blob/master/listview2.jpg" width="400" height="200" style="float: right;"/>
</div>

## Feature: Add a Note
Simple form pop up when a list view item is pressed.

<div>
  <img src="https://github.com/jentoobento/EchoBind/blob/master/note1.jpg" width="200" height="400" style="float: left;"/>
  <img src="https://github.com/jentoobento/EchoBind/blob/master/note2.jpg" width="200" height="400" style="float: right;"/>
</div>
<div>
  <img src="https://github.com/jentoobento/EchoBind/blob/master/note3.jpg" width="200" height="400" style="float: left;"/>
</div>

---

Example of Github login and some axios calls.

Needs Client Id and Client Secret to be able to login with Github.

Some dummy code for other logins such as Spotify.

---

Known Bugs:

- Revoke access not working
- Can only revoke Github access
