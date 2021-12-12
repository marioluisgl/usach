import { IPlansModel } from '../plans/models/plans.model';
import { ChartType } from './dashboard.model';

const emailSentBarChart: ChartType = {
    chart: {
        height: 338,
        type: 'line',
        stacked: false,
        offsetY: -5,
        toolbar: {
            show: false
        }
    },
    stroke: {
        width: [0, 0, 0, 1],
        curve: 'smooth'
    },
    plotOptions: {
        bar: {
            columnWidth: '40%'
        }
    },
    colors: ['#2cb57e', '#0576b9', '#dfe2e6', '#f1b44c'],
    series: [{
        name: 'Income',
        type: 'column',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
    }, {
        name: 'Sales',
        type: 'column',
        data: [19, 8, 26, 21, 18, 36, 30, 28, 40, 39, 15]
    }, {
        name: 'Conversation Ratio',
        type: 'area',
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
    }, {
        name: 'Users',
        type: 'line',
        data: [9, 11, 13, 12, 10, 8, 6, 9, 14, 17, 22]
    }],
    fill: {
        opacity: [0.85, 1, 0.25, 1],
        gradient: {
            inverseColors: false,
            shade: 'light',
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
        }
    },
    labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003', '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'],
    markers: {
        size: 0
    },

    xaxis: {
        type: 'datetime'
    },
    yaxis: {
        title: {
            text: 'Points',
        },
    },
    tooltip: {
        shared: true,
        intersect: false,
        y: {
            formatter: function (y: any) {
                if (typeof y !== "undefined") {
                    return y.toFixed(0) + " points";
                }
                return y;

            }
        }
    },
    grid: {
        borderColor: '#f1f1f1',
        padding: {
            bottom: 15
        }
    }
};

const monthlyEarningChart: ChartType = {
    chart: {
        height: 200,
        type: 'radialBar',
        offsetY: -10
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
                name: {
                    fontSize: '13px',
                    color: undefined,
                    offsetY: 60
                },
                value: {
                    offsetY: 22,
                    fontSize: '16px',
                    color: undefined,
                    formatter: (val: any) => {
                        return val + '%';
                    }
                }
            }
        }
    },
    colors: ['#004b79'],
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            shadeIntensity: 0.15,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 65, 91]
        },
    },
    stroke: {
        dashArray: 4,
    },
    series: [67],
    labels: ['Series A'],
};

const transactions = [
    {
        image: 'assets/images/users/avatar-2.jpg',
        name: 'Herbert C. Patton',
        date: '5/12/2016',
        total: '$14,584',
        status: 'Confirm',
        payment: ['fa-cc-mastercard', 'Mastercard'],
        index: 1
    },
    {
        image: 'assets/images/users/avatar-3.jpg',
        name: 'Mathias N. Klausen',
        date: '10/11/2016',
        total: '$8,541',
        status: 'Waiting payment',
        payment: ['fa-cc-visa', 'Visa'],
        index: 2
    },
    {
        image: 'assets/images/users/avatar-4.jpg',
        name: 'Nikolaj S. Henriksen',
        date: '8/11/2016',
        total: '$954',
        status: 'Confirm',
        payment: ['fab fa-cc-paypal', 'Paypal'],
        index: 3
    },
    {
        image: 'assets/images/users/avatar-5.jpg',
        name: 'Lasse C. Overgaard',
        date: '7/11/2016',
        total: '$44,584',
        status: 'Payment expired',
        payment: ['fa-cc-mastercard', 'Mastercard'],
        index: 4
    },
    {
        image: 'assets/images/users/avatar-6.jpg',
        name: 'Kasper S. Jessen',
        date: '1/11/2016',
        total: '$8,844',
        status: 'Confirm',
        payment: ['fa-cc-visa', 'Visa'],
        index: 5
    }
];

const orders = [
    {
        id: "#12354781",
        image: "assets/images/products/img-2.png",
        name: 'Riverston Glass Chair',
        date: '5/12/2016',
        total: '$185',
        status: 'Delivered',
        payment: ['fa-cc-mastercard', 'Mastercard'],
        index: 1
    },
    {
        id: "#52140300",
        image: "assets/images/products/img-3.png",
        name: 'Shine Company Catalina',
        date: '5/12/2016',
        total: '$1,024',
        status: 'Delivered',
        payment: ['fa-cc-visa', 'Visa'],
        index: 2
    },
    {
        id: "#96254137",
        image: "assets/images/products/img-4.png",
        name: 'Trex Outdoor Furniture Cape',
        date: '5/12/2016',
        total: '$657',
        status: 'Cancel',
        payment: ['fab fa-cc-paypal', 'Paypal'],
        index: 3
    },
    {
        id: "#12365474",
        image: "assets/images/products/img-1.png",
        name: 'Oasis Bathroom Teak Corner',
        date: '5/12/2016',
        total: '$8,451',
        status: 'Shipped',
        payment: ['fa-cc-mastercard', 'Mastercard'],
        index: 4
    },
    {
        id: "#85214796",
        image: "assets/images/products/img-5.png",
        name: 'BeoPlay Speaker',
        date: '5/12/2016',
        total: '$584',
        status: 'Delivered',
        payment: ['fa-cc-visa', 'Visa'],
        index: 5
    }
];

const users = [
    {
        id: "#SD001",
        name: 'Anna Ciantar',
        image: 'assets/images/users/avatar-1.jpg',
        title: 'Designer',
        email: 'annac@hotmai.us',
        phone: '(216) 76 298 896',
        status: 'Active',
        location: 'Philippines',
        index: 1
    },
    {
        id: "#SD002",
        name: 'Paul J. Friend',
        image: 'assets/images/users/avatar-2.jpg',
        title: 'Developer',
        email: 'pauljfrnd@jourrapide.com',
        phone: '937-330-1634',
        status: 'Active',
        location: 'New York',
        index: 2
    },
    {
        id: "#SD003",
        name: 'Kathryn S. Collier',
        image: 'assets/images/users/avatar-3.jpg',
        title: 'Owner',
        email: 'annac@hotmai.us',
        phone: '(216) 76 298 896',
        status: 'Active',
        location: 'Philippines',
        index: 3
    },
    {
        id: "#SD004",
        name: 'Labeeb Ghali',
        image: 'assets/images/users/avatar-4.jpg',
        title: 'Designer',
        email: 'labebswad@teleworm.us',
        phone: '050 414 8778',
        status: 'Blocked',
        location: 'United Kingdom',
        index: 4
    },
    {
        id: "#SD005",
        name: 'Timothy Kauper',
        image: 'assets/images/users/avatar-5.jpg',
        title: 'Founder',
        email: 'thykauper@rhyta.com',
        phone: '(216) 75 612 706',
        status: 'Active',
        location: 'Denmark',
        index: 5
    }
];

const plans = [
    {
        _id: "#SD001",
        course: {
            name: '2020 - 2021'
        },
        semestre: '1er',
        professor: {
            name: 'Designer Alt',
            image: 'assets/images/users/avatar-1.jpg',
        },
        score: 50,
        state: 'Borrador',
        index: 1
    },
    {
        _id: "#SD002",
        course: {
            name: '2020 - 2021'
        },
        semestre: '2do',
        professor: {
            name: 'Juan Alberto',
            image: 'assets/images/users/avatar-2.jpg',
        },
        score: 30,
        state: 'Por aprobar',
        index: 2
    },
    {
        _id: "#SD003",
        course: {
            name: '2021 - 2022'
        },
        semestre: '1er',
        professor: {
            name: 'Aleman Alt Red',
            image: 'assets/images/users/avatar-3.jpg',
        },
        score: 80,
        state: 'Por aprobar',
        index: 3
    },
    {
        _id: "#SD004",
        course: {
            name: '2020 - 2021'
        },
        semestre: '2do',
        professor: {
            name: 'Ramir Bolt Alt',
            image: 'assets/images/users/avatar-4.jpg',
        },
        score: 20,
        state: 'Aprobado',
        index: 4
    },
    {
        _id: "#SD005",
        course: {
            name: '2021 - 2022'
        },
        semestre: '1er',
        professor: {
            name: 'Aleman Alt Red',
            image: 'assets/images/users/avatar-5.jpg',
        },
        score: 80,
        state: 'Por aprobar',
        index: 5
    }
];

const activities = [
    {
        _id: "#SD001",
        title: 'Actividad 1',
        category: {
            name: 'Category 1'
        },
        sub_category: {
            name: 'Sub Category 1'
        },
        hours_per_week: 10,
        hours_per_semestre: 10,
        score: 20,
        done: true,
        index: 1
    },
    {
        _id: "#SD002",
        title: 'Actividad 2',
        category: {
            name: 'Category 2'
        },
        sub_category: {
            name: 'Sub Category 2'
        },
        hours_per_week: 20,
        hours_per_semestre: 80,
        score: 100,
        done: false,
        index: 2
    },
    {
        _id: "#SD003",
        title: 'Actividad 3',
        category: {
            name: 'Category 3'
        },
        sub_category: {
            name: 'Sub Category 3'
        },
        hours_per_week: 10,
        hours_per_semestre: 70,
        score: 80,
        done: false,
        index: 3
    },
    {
        _id: "#SD004",
        title: 'Actividad 4',
        category: {
            name: 'Category 4'
        },
        sub_category: {
            name: 'Sub Category 4'
        },
        hours_per_week: 30,
        hours_per_semestre: 50,
        score: 80,
        done: false,
        index: 4
    },
    {
        _id: "#SD005",
        title: 'Actividad 5',
        category: {
            name: 'Category 5'
        },
        sub_category: {
            name: 'Sub Category 5'
        },
        hours_per_week: 30,
        hours_per_semestre: 50,
        score: 80,
        done: false,
        index: 5
    }
];

const teachers = [
    {
        _id: "#SD001",
        name: 'Anna Ciantar',
        image: 'assets/images/users/avatar-1.jpg',
        email: 'annac@hotmai.us',
        // phone: '(216) 76 298 896',
        role: 'ROLE_TEACHER',
        active: true,
        index: 1
    },
    {
        _id: "#SD002",
        name: 'Paul J. Friend',
        image: 'assets/images/users/avatar-2.jpg',
        email: 'pauljfrnd@jourrapide.com',
        // phone: '(216) 76 298 896',
        role: 'ROLE_TEACHER',
        active: true,
        index: 2
    },
    {
        _id: "#SD003",
        name: 'Kathryn S. Collier',
        image: 'assets/images/users/avatar-3.jpg',
        email: 'annac@hotmai.us',
        // phone: '(216) 76 298 896',
        role: 'ROLE_TEACHER',
        active: false,
        index: 3
    },
    {
        _id: "#SD004",
        name: 'Labeeb Ghali',
        image: 'assets/images/users/avatar-4.jpg',
        email: 'labebswad@teleworm.us',
        // phone: '(216) 76 298 896',
        role: 'ROLE_TEACHER',
        active: true,
        index: 4
    },
    {
        _id: "#SD005",
        name: 'Timothy Kauper',
        image: 'assets/images/users/avatar-5.jpg',
        email: 'thykauper@rhyta.com',
        // phone: '(216) 76 298 896',
        role: 'ROLE_TEACHER',
        active: true,
        index: 5
    }
];

const categories = [
    {
        _id: "#SD001",
        name: 'Category 1',
        description: 'Category 1 description',
        active: true,
        index: 1
    },
    {
        _id: "#SD002",
        name: 'Category 2',
        description: 'Category 2 description',
        active: true,
        index: 2
    },
    {
        _id: "#SD003",
        name: 'Category 3',
        description: 'Category 3 description',
        active: false,
        index: 3
    },
    {
        _id: "#SD004",
        name: 'Category 4',
        description: 'Category 4 description',
        active: true,
        index: 4
    },
    {
        _id: "#SD005",
        name: 'Category 5',
        description: 'Category 5 description',
        active: true,
        index: 5
    }
];

const subcategories = [
    {
        _id: "#SD001",
        name: 'Sub Category 1',
        category: {
            name: 'Category 1'
        },
        hours_per_week: 10,
        hours_per_semestre: 80,
        score: 90,
        active: true,
        index: 1
    },
    {
        _id: "#SD002",
        name: 'Sub Category 2',
        category: {
            name: 'Category 2'
        },
        hours_per_week: 60,
        hours_per_semestre: 180,
        score: 240,
        active: true,
        index: 2
    },
    {
        _id: "#SD003",
        name: 'Sub Category 3',
        category: {
            name: 'Category 3'
        },
        hours_per_week: 10,
        hours_per_semestre: 50,
        score: 60,
        active: false,
        index: 3
    },
    {
        _id: "#SD004",
        name: 'Sub Category 4',
        category: {
            name: 'Category 4'
        },
        hours_per_week: 20,
        hours_per_semestre: 80,
        score: 100,
        active: true,
        index: 4
    },
    {
        _id: "#SD005",
        name: 'Sub Category 5',
        category: {
            name: 'Category 5'
        },
        hours_per_week: 50,
        hours_per_semestre: 80,
        score: 130,
        active: true,
        index: 5
    }
];

const curses = [
    {
        _id: "#SD001",
        name: '2015 - 2016',
        date_to_send_1: '2018/12/04',
        date_to_review_1: '2018/12/04',
        date_to_send_2: '2018/12/04',
        date_to_review_2: '2018/12/04',
    }, {
        _id: "#SD002",
        name: '2016 - 2017',
        date_to_send_1: '2018/12/04',
        date_to_review_1: '2018/12/04',
        date_to_send_2: '2018/12/04',
        date_to_review_2: '2018/12/04',
    }, {
        _id: "#SD003",
        name: '2017 - 2018',
        date_to_send_1: '2018/12/04',
        date_to_review_1: '2018/12/04',
        date_to_send_2: '2018/12/04',
        date_to_review_2: '2018/12/04',
    }, {
        _id: "#SD004",
        name: '2018 - 2019',
        date_to_send_1: '2018/12/04',
        date_to_review_1: '2018/12/04',
        date_to_send_2: '2018/12/04',
        date_to_review_2: '2018/12/04',
    }, {
        _id: "#SD005",
        name: '2019 - 2020',
        date_to_send_1: '2018/12/04',
        date_to_review_1: '2018/12/04',
        date_to_send_2: '2018/12/04',
        date_to_review_2: '2018/12/04',
    },
]

export { 
    emailSentBarChart, 
    monthlyEarningChart, 
    transactions, 
    orders, 
    users, 
    plans, 
    activities,
    teachers,
    categories,
    subcategories,
    curses
};
