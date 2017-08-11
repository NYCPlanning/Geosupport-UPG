exports.footer = {
  height: "0.2cm",
  contents: function(pageNum, numPages) {
    return "<p><center><span style='float:none; font-size: 10px; color:gray;'>" + pageNum + " - " + numPages + "</span></center></p>"
  }
}
