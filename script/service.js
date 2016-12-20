scotchApp.service('userService', function() {

    this.setText = function(text) {
        this.text = text;
    };
    this.getText = function() {
        return this.text;
    };
});