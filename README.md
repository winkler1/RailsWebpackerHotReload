# Hot Reloading with Rails and Webpacker

Made following https://medium.com/statuscode/introducing-webpacker-7136d66cddfb

## New Hotness

To get *hot reloading*, preserving the state of mounted components, import react-hot-loader and wrap the component with a call to `hot`:
https://devtoyou.com/question/NTQ2OTc0MzI/react-rails-with-webpacker-not-hot-reloading.html

# Demo Script

* Clone the repo
* bundle install
* npm install
* `bin/server` will use Foreman to run both Rails and Webpack.
* Browse to localhost:5000
*  Note the "Page loaded" and "created at" times.
* Select some text on the page.
* Edit hello_react.jsx to change the render code, save the file.
* EXPECT: Browser will update, while preserving internal `timeCreated` state. "Page loaded" time will not change.
* EXPECT: Text selection remains... proving that a minimal patch was applied; page state is preserved.