import keyboard
import sys

keyboard.press_and_release("ctrl+t")
keyboard.write(f"www.twitch.tv/{sys.argv[1]}")
keyboard.press_and_release("enter")