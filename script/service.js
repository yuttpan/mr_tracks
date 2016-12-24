scotchApp.service('appService', function () {

    this.setText = function (text) {
        this.text = text;
    };
    this.getText = function () {
        return this.text;
    };

    this.logouts = function () {
        $localStorage.status = null;
        $location.path('/login');
    }
});