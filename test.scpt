on run argv
  launch "iTerm"

  tell application "iTerm"
    activate

    set myterm to (make new terminal)
    tell myterm
      launch session "Default (zsh)"
      set number of columns to 150
      set number of rows to 35
      tell the last session to write text "cd " & item 1 of argv & "; make test; echo 'Press [ENTER] to exit'; read; /usr/bin/osascript ~/dotfiles/activate.scpt; exit"
    end tell
  end tell
end run
