import os
import urllib.request
import requests
import time

folder = 'real'

if not os.path.exists(folder):
    os.makedirs(folder)

for i in range(0, 100):
    time.sleep(1)
    r = requests.get("https://thispersondoesnotexist.com/image", headers={'User-Agent': 'My User Agent 1.0'}).content
    with open("fake/00{:03d}.jpeg".format(i), "wb") as f:
        f.write(r)