const args = process.argv.slice(2); // This gets the actual arguments

if (args.length === 0) {
  console.log("No argument");
} else if (args.length === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}



/* what is process.argv => an ARRAY that contain:
    1. the path to the Node.js binary = specific area where your node.js software is installed.
    2. the path to your script = area whether js file is
    3. any extra arguments passed when running the script
- so the slice(2) - ignores the first 2 items (which are system-related), and saves the rest in a variable called args


if (args.length === 0) checks if the user has passed zero arguments to the script, and if true the script should print "No argument"
*/