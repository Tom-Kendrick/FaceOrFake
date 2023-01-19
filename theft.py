import os
import urllib.request
import time
import requests
num = int(input("Input the final number: "))+1
more = int(input("How many more images do you want: "))

def stealReal(num, more):
    for i in range(num, num+more):
        try:
            url = 'https://www.whichfaceisreal.com/realimages/{:05d}.jpeg'.format(i)
            save_path = os.path.join("real", '{:05d}.jpeg'.format(i))
            urllib.request.urlretrieve(url, save_path)
        except:
            print("Skipped", i)

def stealFake(num,more):
    for i in range(num, num+more):
        try:
            time.sleep(1)
            r = requests.get("https://thispersondoesnotexist.com/image", headers={'User-Agent': 'My User Agent 1.0'}).content
            with open("fake/{:05d}.jpeg".format(i), "wb") as f:
                f.write(r)
        except:
            print("Skipped", i)


stealReal(num, more)
stealFake(num, more)
print("Done", num+more-1)