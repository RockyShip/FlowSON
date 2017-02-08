import os

os.system("npm run build")

f = open("./build/index.html", "r");

contents = f.read()

contents = contents.replace("<script type=\"text/javascript\" src=\"/static/js/main", "<script type=\"text/javascript\" src=\"./static/js/main")

print(contents)

f.close()

f = open("./build/index.html", "w");

f.write(contents)
f.close()


