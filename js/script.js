/*document.getElementById('mySlider').oninput = function() {
    this.style.background = 'linear-gradient(to right, hsl(6, 100%, 80%) 0%, hsl(335, 100%, 65%)' + (((this.value - this.min)/(this.max - this.min) * 100)) + '%, #0c122c ' + (((this.value - this.min)/(this.max - this.min) * 100))+ '%, #0c122c 100%)'
};

let slider = document.getElementById('mySlider');
slider.addEventListener('input', sliderChange);

function sliderChange() {
    let output = document.getElementById('range-value');
    output.innerHTML = slider.value;

    let gigbLeft = document.getElementById('gigb-value');
    gigbLeft.innerHTML = parseInt(this.max) - parseInt(slider.value);
}
*/



$('#range-slider').on("input", function() {
    $(".output").val(this.value);
}).trigger("change");