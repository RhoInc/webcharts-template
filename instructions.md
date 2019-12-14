# webcharts-template
A template for making reusable customizations to webcharts charts

# Initialize a new chart using the template
1. Initialize a new repo / save the template files locally
    - Follow [these instructions](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) if you're using github.
    - For local projects, do this:
     - git clone this repo: `git clone git@github.com:RhoInc/webcharts-template.git new-repo-name`
     - `cd new-repo-name`
     - `rm -rf .git` to remove git tracking
2. Go to the local folder you saved the template files
3. Call `node initChart.js` and respond to the prompts. The script automatically takes the following actions: 
    - Creates a `package.json`.
    - Updates the function name in `/src/index.js`.
    - Populates code in the `src` folder.
    - Makes a really basic `README.md` (overwriting these instructions).
    - Updates the titles in `/test-page/index.html`.
4. Review `pacakge.json` and `readme.md` and make tweaks as needed. You can also re-run `node initCharts.js` if you want. 
5. Test out the standard build process
    - `npm run install`
    - `npm run build`
    - Start a webserver (e.g. `python -m SimpleHTTPServer 8000`) 
    - Open a browser (e.g. `http://localhost:8000/test-page/`) and confirm the test page renderers.
6. Run `node cleanup` to delete the temporary template files including: `initChart.js`, `cleanup.js`,`package-template.json`, `./src/index-template.js`, `./text-file/index-template.html` and `instructions.js`.
7. (If using github) Commit the initialized template. 
    - `git add -A` 
    - `git commit -a -m 'initialize template for new project'`
    - `git push`
8. Get to work on your graphic!
