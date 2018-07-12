$(function () {
    $(".article").each(function (i) {
        bShare.addEntry({
            title: $(this).find("h2 a").text(),
            url: $(this).find("h2 a").attr("href"),
            summary: $(this).find("span").text(),
            pic: $(this).find("img").attr("src")
        });
    });
});