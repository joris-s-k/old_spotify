# old_spotify
Spicetify theme to revert as much of the new ui as possible

Put in spicetify\Themes and use 
```
spicetify config current_theme old_spotify
spicetify apply
```

To account for the reduced row height in playlists you need to add the following to spicetify\config-xpui.ini
```
[Patch]
xpui.js_find_8008 = ,(\w+=)56,
xpui.js_repl_8008 = ,${1}40,
```
