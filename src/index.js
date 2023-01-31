JFCustomWidget.subscribe("ready", function(){
    var phSlider = document.getElementById("phSlider");
    var sliderLength = JFCustomWidget.getWidgetSetting('Maximum');
    var valuesForSlider = Array.from({ length: sliderLength }, (_, i) => i + 1);
    
    var format = {
        to: function (value) {
            return valuesForSlider[Math.round(value)];
        },
        from: function (value) {
            return valuesForSlider.indexOf(Number(value));
        }
    };
    
    noUiSlider.create(phSlider, {
        start: 5,
        range: { min: 0, max: valuesForSlider.length - 1 },
        step: 1,
        tooltips: true,
        pips: { mode: "steps", density: 3, format },
        format
    });
    
    // The display values can be used to control the slider
    phSlider.noUiSlider.set(1);
    
        var label = JFCustomWidget.getWidgetSetting('QuestionLabel');
        document.getElementById('labelText').innerHTML = label;
        var sliderContext = document.getElementById("sliderContext");
        var firstText = JFCustomWidget.getWidgetSetting('firstText');
        sliderContext.firstElementChild.textContent = firstText
        var secondText = JFCustomWidget.getWidgetSetting('secondText');
        sliderContext.querySelector('.center').textContent = secondText
        var thirdText = JFCustomWidget.getWidgetSetting('thirdText');
        sliderContext.lastElementChild.textContent = thirdText
        //subscribe to form submit event
        JFCustomWidget.subscribe("submit", function(){
            var msg = {
                //you should valid attribute to data for JotForm
                //to be able to use youw widget as required
                valid: true,
                value: phSlider.noUiSlider.get()
            }
            // send value to JotForm
            JFCustomWidget.sendSubmit(msg);
        });
    });