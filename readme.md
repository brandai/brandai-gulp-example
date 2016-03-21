Example Brand.ai gulp integration
===

General 
1. run `npm install` to load project dependencies.
(If you have globally installed gulp you can remove it from the dependencies).

Styles Integration
1. Run `gulp styles` to fetch CSS styles from Brand.ai's [sample project](https://brand.ai/styleguide/acme-demo).
2. Run `gulp sass` to compile sass into css. 
3. You can also find an example how to `watch` for sass changes in `gulp sass:watch` task 

Icons Integration

1. Run `grunt icons` task to download and unzip all your icons to destination directory.
2. Use your tool of choice to generate icons font, icon sprites or any other desired option.  


To use with your style guide, just change the download URLs in the gulpfile to your style guide URLs.
Please note that variable names in style.scss are consistent with our example style guide and might need to be adjusted when generating your css files.


