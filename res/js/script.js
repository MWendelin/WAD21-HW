$(function () {
	profileInformation()
});

function profileInformation() {
    $('.user-container img').click(function () {
        $(this).siblings('.drop-down-container').toggle()
    })
}