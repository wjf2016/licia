/* Tiny moment.js like implementation.
 *
 * It only supports a subset of moment.js api.
 *
 * ### Available methods
 * 
 * format, isValid, isLeapYear, isSame, isBefore, isAfter, year,
 * month, date, hour, minute, second, millisecond, unix, clone,
 * toDate, toArray, toJSON, toISOString, toObject, toString
 * 
 * Note: Format uses dateFormat module, so the mask is not quite the same as moment.js.
 * 
 * ```javascript
 * moment('20180501').format('yyyy-mm-dd'); // -> '2018-05-01'
 * ```
 */

/* module
 * env: all
 * test: all
 */ 

_('Class toDate dateFormat isLeapYear extend'); 

function exports(val) 
{
    return new Moment(val);
}

var Moment = Class({
    initialize: function (val) 
    {
        this._d = toDate(val);

        this._init();
    },
    _init: function () 
    {
        var d = this._d;

        extend(this, {
            _year: d.getFullYear(),
            _month: d.getMonth(),
            _date: d.getDate(),
            _hour: d.getHours(),
            _minute: d.getMinutes(),
            _second: d.getSeconds(),
            _millisecond: d.getMilliseconds()
        });
    },
    format: function (mask)
    {
        return dateFormat(this._d, mask);
    },
    isValid: function () 
    {
        return !(this._d.toString() === 'Invalid Date');
    },
    isLeapYear: function () 
    {
        return isLeapYear(this._year);
    },
    isSame: function (that) 
    {
        return this.valueOf() === that.valueOf();
    },
    valueOf: function () 
    {
        return this._d.getTime();
    },
    isBefore: function (that) 
    {
        return this.valueOf() < that.valueOf();
    },
    isAfter: function (that)
    {
        return this.valueOf() > that.valueOf();
    },
    year: function () 
    {
        return this._year;
    },
    month: function () 
    {
        return this._month;
    },
    date: function () 
    {
        return this._date;
    },
    hour: function () 
    {
        return this._hour;
    },
    minute: function () 
    {
        return this._minute;
    },
    second: function () 
    {
        return this._second;
    },
    millisecond: function ()
    {
        return this._millisecond;
    },
    unix: function () 
    {
        return Math.floor(this.valueOf() / 1000);
    },
    clone: function () 
    {
        return new Moment(this);
    },
    toDate: function () 
    {
        return new Date(this._d);
    },
    toArray: function () 
    {
        return [
            this._year,
            this._month,
            this._date,
            this._hour,
            this._minute,
            this._second,
            this._millisecond
        ];
    },
    toJSON: function () 
    {
        return this.toISOString();
    },
    toISOString: function () 
    {
        return this.toDate().toISOString();
    },
    toObject: function () 
    {
        return {
            years: this._year,
            months: this._month,
            date: this._date,
            hours: this._hour,
            minutes: this._minute,
            seconds: this._second,
            milliseconds: this._millisecond
        };
    },
    toString: function () 
    {
        return this._d.toUTCString();
    }
});