# Pivots
Pivot to different sites!

# Use Case:
This tool can be used to highlight certain data then pivot to another site with that data through the url. This is currently built for Chrome. 
Think of something like DuckDuckGo where the search term is in the url i.e https://duckduckgo.com/?t=ffab&q=SEARCHTERM&ia=web

With this tool one can highlight a term -> right click -> navigate to their pivots and then pivot to search for their highlighted term on DuckDuckGo's site.

# Get Started
* Currently this tool is not on the Chrome web store which means it must be installed manually
* download and extract this repo
* in Chrome navigate to chrome://extensions/
* in the upper right corner turn on Developer mode
* in the upper left corner click load unpacked
* navigate to the folder that contains the Pivots files
* hit "Select Folder"
* in the upper right corner of the browser click on the little puzzle icon.
* locate the extension "Pivots" and pin the tool
* now you can click on the icon and a description of the tool and a form with show up
* you can fill out the form for whatever pivot you want
* available options are "Add" to add a pivot, "Remove" to remove a pivot, and "Remove All" to remove all pivots.
  * Note: URL Ending not needed for to add a pivot
  * Note: The Remove option only needs the Pivot name. 
* after adding or removing your pivots go back to chrome://extensions/ and locate the Pivots extension
* select the refresh button (little circular arrow).
* now your pivots should show up on the context menu when you highlight and right click on something in the browser window
  * Note: a known limitation is when sites take over your context menu to populate their own options which may block your local extensions from working.

# Permissions
* Chrome Context Menus
* Chrome Storage (local)
