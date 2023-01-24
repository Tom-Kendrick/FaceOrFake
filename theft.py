import os
import urllib.request
import time
import requests
from PIL import Image
import glob
import matplotlib.pyplot as plt
import numpy as np

num = int(input("Input the final number: "))+1
more = int(input("How many more images do you want: "))

def stealRealCats(num, more):
    for i in range(num, num+more):
        try:
            url = 'https://www.whichfaceisreal.com/realimages/{:05d}.jpeg'.format(i)
            save_path = os.path.join("cats/real", '{:05d}.jpeg'.format(i))
            urllib.request.urlretrieve(url, save_path)
        except:
            print("Skipped", i)

def stealFakeHuman(num,more):
    for i in range(num, num+more):
        try:
            time.sleep(1)
            r = requests.get("https://thispersondoesnotexist.com/image", headers={'User-Agent': 'My User Agent 1.0'}).content
            with open("human/fake/{:05d}.jpeg".format(i), "wb") as f:
                f.write(r)
        except:
            print("Skipped", i)

def stealRealCats():
    images = glob.glob("cats/real/*.jpg")
    i = 0
    for image in images:
        im = Image.open(image)
        width, height = im.size
        if width > height:
            left = width/2 - height/2
            right = width/2 + height/2
            im.crop((left , 0, right, height))
        elif height > width:
            top = height/2 - width/2
            bottom = height/2 + width/2
            final=im.crop((0, top, width, bottom))
        final.save("cats/real/{:05d}.jpeg".format(i), "JPEG")
        i += 1
        


def stealFakeCats(num,more):
    for i in range(num, num+more):
        try:
            time.sleep(1)
            r = requests.get("https://thiscatdoesnotexist.com", headers={'User-Agent': 'My User Agent 1.0'}).content
            with open("cats/fake/{:05d}.jpeg".format(i), "wb") as f:
                f.write(r)
        except:
            print("Skipped", i)

stealRealCats()
print("Done", num+more-1)