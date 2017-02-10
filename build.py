from os import system

# Modify index.html to be able to run directly in electron without a server
system("npm run build")

f = open("./build/index.html", "r");

contents = f.read()

contents = contents.replace("<script type=\"text/javascript\" "
                            "src=\"/static/js/main", "<script "
                            "type=\"text/javascript\" src=\"./static/js/main")

f.close()

f = open("./build/index.html", "w");

f.write(contents)
f.close()
print("Fixed index.html script source")

# Compile LESS into css
system("./node_modules/.bin/lessc ./public/styles/main.less ./build/styles/main.css")
print("Compiled LESS into CSS")

print("Building Done")
