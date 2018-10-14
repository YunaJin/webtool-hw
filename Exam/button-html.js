function pageStart() {
    const html = `
  <!doctype html>
  <html>
  <head></head>
  <body>
  `;
    return html;
}

function nav() {
    const html = '<a href="http://127.0.0.1:3000">Home</a>';
    return html;
}

function button(num) {
    var html = ["<ul>"];

    for (let i = 0; i < num; i++) {
        html.push("<li><button>button</button></li>")
    }
    html.push("</ul>");
    return pageStart() + nav() + html.join("\n") + pageEnd()

}

function pageEnd() {
    const html = `
   </body>
   </html>
  `;
    return html;
}

module.exports = {
    button
};