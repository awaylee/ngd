/**
 * Created by Administrator on 2017/3/28.
 */
$(function() {

    var alarmStatistics = new Vue({
        el: '#alarmStatistics',
        data: {
            statistics: {},
            option: {
                title: {
                    text: ''
                },
                tooltip: {},
                legend: {
                    data:['']
                },
                xAxis: {
                    data: ["关键","重大","错误","警告","信息"]
                },
                yAxis: {},
                series: [{
                    name: '数量',
                    type: 'bar',
                    data: [80, 40, 20, 35, 10]
                }]
            },
        },
        methods: {
            //获取统计数据
            getStatisticsData: function () {

            }
        },
        mounted: function () {
            // 基于准备好的dom，初始化echarts实例
            this.statistics = echarts.init($('#statistics')[0]);
            // 使用刚指定的配置项和数据显示图表。
            this.statistics.setOption(this.option);
        }
    });

    var alarmRatio = new Vue({
        el: '#alarmRatio',
        data: {
            ratio: {},
            option: {
                color: ['#5793f3', '#d14a61', '#675bba'],
                tooltip: {
                    trigger: 'none',
                    axisPointer: {
                        type: 'cross'
                    }
                },
                legend: {
                    data:['昨日告警', '今日告警']
                },
                grid: {
                    top: 70,
                    bottom: 50
                },
                xAxis: [
                    {
                        type: 'category',
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLine: {
                            onZero: false,
                            lineStyle: {
                                color: '#d14a61'
                            }
                        },
                        axisPointer: {
                            label: {
                                formatter: function (params) {
                                    return '告警数量  ' + params.value + '：' + params.seriesData[0].data;
                                }
                            }
                        },
                        data: ["2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24"]
                    },
                    {
                        type: 'category',
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLine: {
                            onZero: false,
                            lineStyle: {
                                color: '#5793f3'
                            }
                        },
                        axisPointer: {
                            label: {
                                formatter: function (params) {
                                    return '告警数量  ' + params.value + '：' + params.seriesData[0].data;
                                }
                            }
                        },
                        data: ["2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24"]
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name:'昨日告警',
                        type:'line',
                        xAxisIndex: 1,
                        smooth: true,
                        data: [2, 6, 9.0, 26, 28, 70, 175, 182, 48, 18, 6, 2]
                    },
                    {
                        name:'今日告警',
                        type:'line',
                        smooth: true,
                        data: [3, 5, 11, 18, 48, 69, 231, 46, 55, 18, 10, 1]
                    }
                ]
            }
        },
        methods: {
            //获取环比数据
            getRatioData: function () {

            }
        },
        mounted: function () {
            // 基于准备好的dom，初始化echarts实例
            this.ratio = echarts.init($('#ratio')[0]);
            // 使用刚指定的配置项和数据显示图表。
            this.ratio.setOption(this.option);
        }
    });

    var alarmBtns = new Vue({
        el: '#alarmBtns',
        data: {},
        methods: {
            confirmAlarm: function () {
                alert('confirmAlarm');
            },
            cancelAlarm: function () {
                alert('cancelAlarm');
            },
            closeAlarm: function () {
                alert('closeAlarm');
            },
            changeClass: function () {
                alert('changeClass');
            },
            download: function () {
                alert('download');
            }
        }
    });

    var alarmTable = new Vue({
        el: '#alarmTable',
        data: {
            alarmList: []
        },
        methods: {
            getAllAlarms: function () {
                $.get("alarm/getall", function(data) {
                    alarmTable.alarmList = JSON.parse(data);
                });
            }
        },
        created: function () {
            this.getAllAlarms();
        }
    });

});
