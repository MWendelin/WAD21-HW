$(function () {
	profileInformation();
	loadPosts();

});

function profileInformation() {
    $('.user-container img').click(function () {
        $(this).siblings('.drop-down-container').toggle()
    })
}

function loadPosts() {
    $.get("https://api.npoint.io/c48d21c16fe58944166e", function(posts) {
        for (post of posts) {
            let postContainer = $('<div class = "box">');
            let postPic = $('<div id="picPost">')
            let postFooter = $('<div id="postFooter">').text(post.post.signature);
            let createTime = $('<div id="postHeader">').text(post.post_header.timestamp);
            postContainer.append(createTime);
            if (post.post.image != null) {
                let img = $('<img>')
                	.attr('src', post.post.image)
                	.attr('alt', post.post.imageText);
            	postPic.append(img);
            	postContainer.append(postPic);
            }
            postContainer.append(postFooter);
            $('.main-container').append(postContainer)
        }
    })
}