const f=require("./index")

f.myFileWriter("file1.txt","hello")
f.myFileReader("file1.txt")
f.myFileUpdater("file1.txt","world")
f.myFileWriter("file2.txt","hi")
f.myFileDeleter("file2.txt")