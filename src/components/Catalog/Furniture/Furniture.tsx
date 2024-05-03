'use client'
import styles from '../Catalog.module.scss'
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import {useState, useRef, useEffect} from 'react'
import { arrow, cross } from '@/assets';
import classNames from 'classnames';
import { useSearchParams } from 'next/navigation';
import { Suspense } from "react";
import { lo1, lo2, lo3,lo4,lo5,lo6,lo7,lo8 } from '@/catalog';
import { l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11,l12,l13,l14,l15,l16,l17,l18,l19,l20,l21,l22,l23,l24,l25,l26,l27,l28,l29,l30,l31,l32,l33,l34,l35,l36,l37,l38,l39,l40,l41,l42,l43,l44,l45,l46,l47,l48,l49,l50,l51,l52,l53,l54,l55,l56,l57,l58,l59,l60,l61,l62,l63,l64,l65,l66,l67,l68,l69,l70,l71,l72,l73,l74,l75,l76 } from '@/catalog';
import { h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, h12, h13, h14, h15, h16, h17, h18, h19, h20, h21, h22, h23, h24, h25, h26, h27, 
    h28, h29, h30, h31, h32, h33, h34, h35, h36, h37, h38, h39, h40, h41, h42, h43, h44, h45, h46, h47, h48, h49, h50, h51, h52, h53, h54, h55, h56, h57, h58, h59, h60, h61, h62, h63, h64, h65, h66, h67, h68, h69, h70, h71, h72, h73, h74, h75, h76, h77, h78, h79, h80, h81, h82, h83, h84, h85, h86, h87, h88, h89, h90, h91, h92, h93, h94, h95, h96, h97, h98, h99, h100, h101, h102, 
    h103, h104, h105, h106, h107, h108, h109, h110, h111, h112, h113, h114, h115, h116, h117, h118, h119, h120, h121, h122, h123, 
    h124, h125, h126, h127, h128, h129, h130, h131, h132, h133, h134, h135, h136, h137, h138, h139, h140, h141, h142, h143, h144, 
    h145, h146, h147, h148, h149, h150, h151, h152, h153, h154, h155, h156, h157, h158, h159, h160, h161, h162, h163, h164, h165, 
    h166, h167, h168, h169, h170, h171, h172, h173, h174, h175, h176, h177, h178, h179, h180, h181, h182, h183, h184, h185, h186, 
    h187, h188, h189, h190, h191, h192, h193, h194, h195, h196, h197, h198, h199, h200, h201, h202, h203, h204, h205, h206, h207, 
    h208, h209, h210, h211, h212, h213, h214, h215, h216, h217, h218, h219, h220, h221, h222, h223, h224, h225, h226, h227, h228, 
    h229, h230, h231, h232, h233, h234, h235, h236, h237, h238, h239, h240, h241, h242, h243, h244, h245, h246, h247, h248, h249, 
    h250, h251, h252, h253, h254, h255, h256, h257, h258, h259, h260, h261, h262, h263, h264, h265, h266, h267, h268, h269, h270, 
    h271, h272, h273, h274, h275, h276, h277, h278, h279, h280, h281, h282, h283, h284, h285, h286, h287, h288, h289, h290, h291, 
    h292, h293, h294, h295, h296, h297, h298, h299, h300, h301, h302, h303, h304, h305, h306, h307, h308, h309, h310, h311, h312, 
    h313, h314, h315, h316, h317, h318, h319, h320, h321, h322, h323, h324, h325, h326, h327, h328, h329, h330, h331, h332, h333, 
    h334, h335, h336, h337, h338, h339, h340, h341, h342, h343, h344, h345, h346, h347, h348, h349, h350, h351, h352, h353, h354, 
    h355, h356, h357, h358, h359, h360, h361, h362, h363, h364, h365, h366, h367, h368, h369, h370, h371, h372, h373, h374, h375, 
    h376, h377, h378, h379, h380, h381, h382, h383, h384, h385, h386, h387, h388, h389, h390, h391, h392, h393, h394, h395, h396, 
    h397, h398, h399, h400, h401, h402, h403, h404, h405, h406, h407, h408, h409, h410, h411, h412, h413, h414, h415, h416, h417, 
    h418, h419, h420, h421, h422, h423, h424, h425, h426, h427, h428, h429, h430, h431, h432, } from '@/catalog';

interface CardProps{
    id: number,
    img: StaticImageData,
    price: number
}

const Furniture = () => {

    const handles = [
        {id: 3000, img: h1, price: 0},
        {id: 3001, img: h2, price: 0},
        {id: 3002, img: h3, price: 0},
        {id: 3003, img: h4, price: 0},
        {id: 3004, img: h5, price: 0},
        {id: 3005, img: h6, price: 0},
        {id: 3006, img: h7, price: 0},
        {id: 3007, img: h8, price: 0},
        {id: 3008, img: h9, price: 0},
        {id: 3009, img: h10, price: 0},
        {id: 3010, img: h11, price: 0},
        {id: 3011, img: h12, price: 0},
        {id: 3012, img: h13, price: 0},
        {id: 3013, img: h14, price: 0},
        {id: 3014, img: h15, price: 0},
        {id: 3015, img: h16, price: 0},
        {id: 3016, img: h17, price: 0},
        {id: 3017, img: h18, price: 0},
        {id: 3018, img: h19, price: 0},
        {id: 3019, img: h20, price: 0},
        {id: 3020, img: h21, price: 0},
        {id: 3021, img: h22, price: 0},
        {id: 3022, img: h23, price: 0},
        {id: 3023, img: h24, price: 0},
        {id: 3024, img: h25, price: 0},
        {id: 3025, img: h26, price: 0},
        {id: 3026, img: h27, price: 0},
        {id: 3027, img: h28, price: 0},
        {id: 3028, img: h29, price: 0},
        {id: 3029, img: h30, price: 0},
        {id: 3030, img: h31, price: 0},
        {id: 3031, img: h32, price: 0},
        {id: 3032, img: h33, price: 0},
        {id: 3033, img: h34, price: 0},
        {id: 3034, img: h35, price: 0},
        {id: 3035, img: h36, price: 0},
        {id: 3036, img: h37, price: 0},
        {id: 3037, img: h38, price: 0},
        {id: 3038, img: h39, price: 0},
        {id: 3039, img: h40, price: 0},
        {id: 3040, img: h41, price: 0},
        {id: 3041, img: h42, price: 0},
        {id: 3042, img: h43, price: 0},
        {id: 3043, img: h44, price: 0},
        {id: 3044, img: h45, price: 0},
        {id: 3045, img: h46, price: 0},
        {id: 3046, img: h47, price: 0},
        {id: 3047, img: h48, price: 0},
        {id: 3048, img: h49, price: 0},
        {id: 3049, img: h50, price: 0},
        {id: 3050, img: h51, price: 0},
        {id: 3051, img: h52, price: 0},
        {id: 3052, img: h53, price: 0},
        {id: 3053, img: h54, price: 0},
        {id: 3054, img: h55, price: 0},
        {id: 3055, img: h56, price: 0},
        {id: 3056, img: h57, price: 0},
        {id: 3057, img: h58, price: 0},
        {id: 3058, img: h59, price: 0},
        {id: 3059, img: h60, price: 0},
        {id: 3060, img: h61, price: 0},
        {id: 3061, img: h62, price: 0},
        {id: 3062, img: h63, price: 0},
        {id: 3063, img: h64, price: 0},
        {id: 3064, img: h65, price: 0},
        {id: 3065, img: h66, price: 0},
        {id: 3066, img: h67, price: 0},
        {id: 3067, img: h68, price: 0},
        {id: 3068, img: h69, price: 0},
        {id: 3069, img: h70, price: 0},
        {id: 3070, img: h71, price: 0},
        {id: 3071, img: h72, price: 0},
        {id: 3072, img: h73, price: 0},
        {id: 3073, img: h74, price: 0},
        {id: 3074, img: h75, price: 0},
        {id: 3075, img: h76, price: 0},
        {id: 3076, img: h77, price: 0},
        {id: 3077, img: h78, price: 0},
        {id: 3078, img: h79, price: 0},
        {id: 3079, img: h80, price: 0},
        {id: 3080, img: h81, price: 0},
        {id: 3081, img: h82, price: 0},
        {id: 3082, img: h83, price: 0},
        {id: 3083, img: h84, price: 0},
        {id: 3084, img: h85, price: 0},
        {id: 3085, img: h86, price: 0},
        {id: 3086, img: h87, price: 0},
        {id: 3087, img: h88, price: 0},
        {id: 3088, img: h89, price: 0},
        {id: 3089, img: h90, price: 0},
        {id: 3090, img: h91, price: 0},
        {id: 3091, img: h92, price: 0},
        {id: 3092, img: h93, price: 0},
        {id: 3093, img: h94, price: 0},
        {id: 3094, img: h95, price: 0},
        {id: 3095, img: h96, price: 0},
        {id: 3096, img: h97, price: 0},
        {id: 3097, img: h98, price: 0},
        {id: 3098, img: h99, price: 0},
        {id: 3099, img: h100, price: 0},
        {id: 3100, img: h101, price: 0},
        {id: 3101, img: h102, price: 0},
        {id: 3102, img: h103, price: 0},
        {id: 3103, img: h104, price: 0},
        {id: 3104, img: h105, price: 0},
        {id: 3105, img: h106, price: 0},
        {id: 3106, img: h107, price: 0},
        {id: 3107, img: h108, price: 0},
        {id: 3108, img: h109, price: 0},
        {id: 3109, img: h110, price: 0},
        {id: 3110, img: h111, price: 0},
        {id: 3111, img: h112, price: 0},
        {id: 3112, img: h113, price: 0},
        {id: 3113, img: h114, price: 0},
        {id: 3114, img: h115, price: 0},
        {id: 3115, img: h116, price: 0},
        {id: 3116, img: h117, price: 0},
        {id: 3117, img: h118, price: 0},
        {id: 3118, img: h119, price: 0},
        {id: 3119, img: h120, price: 0},
        {id: 3120, img: h121, price: 0},
        {id: 3121, img: h122, price: 0},
        {id: 3122, img: h123, price: 0},
        {id: 3123, img: h124, price: 0},
        {id: 3124, img: h125, price: 0},
        {id: 3125, img: h126, price: 0},
        {id: 3126, img: h127, price: 0},
        {id: 3127, img: h128, price: 0},
        {id: 3128, img: h129, price: 0},
        {id: 3129, img: h130, price: 0},
        {id: 3130, img: h131, price: 0},
        {id: 3131, img: h132, price: 0},
        {id: 3132, img: h133, price: 0},
        {id: 3133, img: h134, price: 0},
        {id: 3134, img: h135, price: 0},
        {id: 3135, img: h136, price: 0},
        {id: 3136, img: h137, price: 0},
        {id: 3137, img: h138, price: 0},
        {id: 3138, img: h139, price: 0},
        {id: 3139, img: h140, price: 0},
        {id: 3140, img: h141, price: 0},
        {id: 3141, img: h142, price: 0},
        {id: 3142, img: h143, price: 0},
        {id: 3143, img: h144, price: 0},
        {id: 3144, img: h145, price: 0},
        {id: 3145, img: h146, price: 0},
        {id: 3146, img: h147, price: 0},
        {id: 3147, img: h148, price: 0},
        {id: 3148, img: h149, price: 0},
        {id: 3149, img: h150, price: 0},
        {id: 3150, img: h151, price: 0},
        {id: 3151, img: h152, price: 0},
        {id: 3152, img: h153, price: 0},
        {id: 3153, img: h154, price: 0},
        {id: 3154, img: h155, price: 0},
        {id: 3155, img: h156, price: 0},
        {id: 3156, img: h157, price: 0},
        {id: 3157, img: h158, price: 0},
        {id: 3158, img: h159, price: 0},
        {id: 3159, img: h160, price: 0},
        {id: 3160, img: h161, price: 0},
        {id: 3161, img: h162, price: 0},
        {id: 3162, img: h163, price: 0},
        {id: 3163, img: h164, price: 0},
        {id: 3164, img: h165, price: 0},
        {id: 3165, img: h166, price: 0},
        {id: 3166, img: h167, price: 0},
        {id: 3167, img: h168, price: 0},
        {id: 3168, img: h169, price: 0},
        {id: 3169, img: h170, price: 0},
        {id: 3170, img: h171, price: 0},
        {id: 3171, img: h172, price: 0},
        {id: 3172, img: h173, price: 0},
        {id: 3173, img: h174, price: 0},
        {id: 3174, img: h175, price: 0},
        {id: 3175, img: h176, price: 0},
        {id: 3176, img: h177, price: 0},
        {id: 3177, img: h178, price: 0},
        {id: 3178, img: h179, price: 0},
        {id: 3179, img: h180, price: 0},
        {id: 3180, img: h181, price: 0},
        {id: 3181, img: h182, price: 0},
        {id: 3182, img: h183, price: 0},
        {id: 3183, img: h184, price: 0},
        {id: 3184, img: h185, price: 0},
        {id: 3185, img: h186, price: 0},
        {id: 3186, img: h187, price: 0},
        {id: 3187, img: h188, price: 0},
        {id: 3188, img: h189, price: 0},
        {id: 3189, img: h190, price: 0},
        {id: 3190, img: h191, price: 0},
        {id: 3191, img: h192, price: 0},
        {id: 3192, img: h193, price: 0},
        {id: 3193, img: h194, price: 0},
        {id: 3194, img: h195, price: 0},
        {id: 3195, img: h196, price: 0},
        {id: 3196, img: h197, price: 0},
        {id: 3197, img: h198, price: 0},
        {id: 3198, img: h199, price: 0},
        {id: 3199, img: h200, price: 0},
        {id: 3200, img: h201, price: 0},
        {id: 3201, img: h202, price: 0},
        {id: 3202, img: h203, price: 0},
        {id: 3203, img: h204, price: 0},
        {id: 3204, img: h205, price: 0},
        {id: 3205, img: h206, price: 0},
        {id: 3206, img: h207, price: 0},
        {id: 3207, img: h208, price: 0},
        {id: 3208, img: h209, price: 0},
        {id: 3209, img: h210, price: 0},
        {id: 3210, img: h211, price: 0},
        {id: 3211, img: h212, price: 0},
        {id: 3212, img: h213, price: 0},
        {id: 3213, img: h214, price: 0},
        {id: 3214, img: h215, price: 0},
        {id: 3215, img: h216, price: 0},
        {id: 3216, img: h217, price: 0},
        {id: 3217, img: h218, price: 0},
        {id: 3218, img: h219, price: 0},
        {id: 3219, img: h220, price: 0},
        {id: 3220, img: h221, price: 0},
        {id: 3221, img: h222, price: 0},
        {id: 3222, img: h223, price: 0},
        {id: 3223, img: h224, price: 0},
        {id: 3224, img: h225, price: 0},
        {id: 3225, img: h226, price: 0},
        {id: 3226, img: h227, price: 0},
        {id: 3227, img: h228, price: 0},
        {id: 3228, img: h229, price: 0},
        {id: 3229, img: h230, price: 0},
        {id: 3230, img: h231, price: 0},
        {id: 3231, img: h232, price: 0},
        {id: 3232, img: h233, price: 0},
        {id: 3233, img: h234, price: 0},
        {id: 3234, img: h235, price: 0},
        {id: 3235, img: h236, price: 0},
        {id: 3236, img: h237, price: 0},
        {id: 3237, img: h238, price: 0},
        {id: 3238, img: h239, price: 0},
        {id: 3239, img: h240, price: 0},
        {id: 3240, img: h241, price: 0},
        {id: 3241, img: h242, price: 0},
        {id: 3242, img: h243, price: 0},
        {id: 3243, img: h244, price: 0},
        {id: 3244, img: h245, price: 0},
        {id: 3245, img: h246, price: 0},
        {id: 3246, img: h247, price: 0},
        {id: 3247, img: h248, price: 0},
        {id: 3248, img: h249, price: 0},
        {id: 3249, img: h250, price: 0},
        {id: 3250, img: h251, price: 0},
        {id: 3251, img: h252, price: 0},
        {id: 3252, img: h253, price: 0},
        {id: 3253, img: h254, price: 0},
        {id: 3254, img: h255, price: 0},
        {id: 3255, img: h256, price: 0},
        {id: 3256, img: h257, price: 0},
        {id: 3257, img: h258, price: 0},
        {id: 3258, img: h259, price: 0},
        {id: 3259, img: h260, price: 0},
        {id: 3260, img: h261, price: 0},
        {id: 3261, img: h262, price: 0},
        {id: 3262, img: h263, price: 0},
        {id: 3263, img: h264, price: 0},
        {id: 3264, img: h265, price: 0},
        {id: 3265, img: h266, price: 0},
        {id: 3266, img: h267, price: 0},
        {id: 3267, img: h268, price: 0},
        {id: 3268, img: h269, price: 0},
        {id: 3269, img: h270, price: 0},
        {id: 3270, img: h271, price: 0},
        {id: 3271, img: h272, price: 0},
        {id: 3272, img: h273, price: 0},
        {id: 3273, img: h274, price: 0},
        {id: 3274, img: h275, price: 0},
        {id: 3275, img: h276, price: 0},
        {id: 3276, img: h277, price: 0},
        {id: 3277, img: h278, price: 0},
        {id: 3278, img: h279, price: 0},
        {id: 3279, img: h280, price: 0},
        {id: 3280, img: h281, price: 0},
        {id: 3281, img: h282, price: 0},
        {id: 3282, img: h283, price: 0},
        {id: 3283, img: h284, price: 0},
        {id: 3284, img: h285, price: 0},
        {id: 3285, img: h286, price: 0},
        {id: 3286, img: h287, price: 0},
        {id: 3287, img: h288, price: 0},
        {id: 3288, img: h289, price: 0},
        {id: 3289, img: h290, price: 0},
        {id: 3290, img: h291, price: 0},
        {id: 3291, img: h292, price: 0},
        {id: 3292, img: h293, price: 0},
        {id: 3293, img: h294, price: 0},
        {id: 3294, img: h295, price: 0},
        {id: 3295, img: h296, price: 0},
        {id: 3296, img: h297, price: 0},
        {id: 3297, img: h298, price: 0},
        {id: 3298, img: h299, price: 0},
        {id: 3299, img: h300, price: 0},
        {id: 3300, img: h301, price: 0},
        {id: 3301, img: h302, price: 0},
        {id: 3302, img: h303, price: 0},
        {id: 3303, img: h304, price: 0},
        {id: 3304, img: h305, price: 0},
        {id: 3305, img: h306, price: 0},
        {id: 3306, img: h307, price: 0},
        {id: 3307, img: h308, price: 0},
        {id: 3308, img: h309, price: 0},
        {id: 3309, img: h310, price: 0},
        {id: 3310, img: h311, price: 0},
        {id: 3311, img: h312, price: 0},
        {id: 3312, img: h313, price: 0},
        {id: 3313, img: h314, price: 0},
        {id: 3314, img: h315, price: 0},
        {id: 3315, img: h316, price: 0},
        {id: 3316, img: h317, price: 0},
        {id: 3317, img: h318, price: 0},
        {id: 3318, img: h319, price: 0},
        {id: 3319, img: h320, price: 0},
        {id: 3320, img: h321, price: 0},
        {id: 3321, img: h322, price: 0},
        {id: 3322, img: h323, price: 0},
        {id: 3323, img: h324, price: 0},
        {id: 3324, img: h325, price: 0},
        {id: 3325, img: h326, price: 0},
        {id: 3326, img: h327, price: 0},
        {id: 3327, img: h328, price: 0},
        {id: 3328, img: h329, price: 0},
        {id: 3329, img: h330, price: 0},
        {id: 3330, img: h331, price: 0},
        {id: 3331, img: h332, price: 0},
        {id: 3332, img: h333, price: 0},
        {id: 3333, img: h334, price: 0},
        {id: 3334, img: h335, price: 0},
        {id: 3335, img: h336, price: 0},
        {id: 3336, img: h337, price: 0},
        {id: 3337, img: h338, price: 0},
        {id: 3338, img: h339, price: 0},
        {id: 3339, img: h340, price: 0},
        {id: 3340, img: h341, price: 0},
        {id: 3341, img: h342, price: 0},
        {id: 3342, img: h343, price: 0},
        {id: 3343, img: h344, price: 0},
        {id: 3344, img: h345, price: 0},
        {id: 3345, img: h346, price: 0},
        {id: 3346, img: h347, price: 0},
        {id: 3347, img: h348, price: 0},
        {id: 3348, img: h349, price: 0},
        {id: 3349, img: h350, price: 0},
        {id: 3350, img: h351, price: 0},
        {id: 3351, img: h352, price: 0},
        {id: 3352, img: h353, price: 0},
        {id: 3353, img: h354, price: 0},
        {id: 3354, img: h355, price: 0},
        {id: 3355, img: h356, price: 0},
        {id: 3356, img: h357, price: 0},
        {id: 3357, img: h358, price: 0},
        {id: 3358, img: h359, price: 0},
        {id: 3359, img: h360, price: 0},
        {id: 3360, img: h361, price: 0},
        {id: 3361, img: h362, price: 0},
        {id: 3362, img: h363, price: 0},
        {id: 3363, img: h364, price: 0},
        {id: 3364, img: h365, price: 0},
        {id: 3365, img: h366, price: 0},
        {id: 3366, img: h367, price: 0},
        {id: 3367, img: h368, price: 0},
        {id: 3368, img: h369, price: 0},
        {id: 3369, img: h370, price: 0},
        {id: 3370, img: h371, price: 0},
        {id: 3371, img: h372, price: 0},
        {id: 3372, img: h373, price: 0},
        {id: 3373, img: h374, price: 0},
        {id: 3374, img: h375, price: 0},
        {id: 3375, img: h376, price: 0},
        {id: 3376, img: h377, price: 0},
        {id: 3377, img: h378, price: 0},
        {id: 3378, img: h379, price: 0},
        {id: 3379, img: h380, price: 0},
        {id: 3380, img: h381, price: 0},
        {id: 3381, img: h382, price: 0},
        {id: 3382, img: h383, price: 0},
        {id: 3383, img: h384, price: 0},
        {id: 3384, img: h385, price: 0},
        {id: 3385, img: h386, price: 0},
        {id: 3386, img: h387, price: 0},
        {id: 3387, img: h388, price: 0},
        {id: 3388, img: h389, price: 0},
        {id: 3389, img: h390, price: 0},
        {id: 3390, img: h391, price: 0},
        {id: 3391, img: h392, price: 0},
        {id: 3392, img: h393, price: 0},
        {id: 3393, img: h394, price: 0},
        {id: 3394, img: h395, price: 0},
        {id: 3395, img: h396, price: 0},
        {id: 3396, img: h397, price: 0},
        {id: 3397, img: h398, price: 0},
        {id: 3398, img: h399, price: 0},
        {id: 3399, img: h400, price: 0},
        {id: 3400, img: h401, price: 0},
        {id: 3401, img: h402, price: 0},
        {id: 3402, img: h403, price: 0},
        {id: 3403, img: h404, price: 0},
        {id: 3404, img: h405, price: 0},
        {id: 3405, img: h406, price: 0},
        {id: 3406, img: h407, price: 0},
        {id: 3407, img: h408, price: 0},
        {id: 3408, img: h409, price: 0},
        {id: 3409, img: h410, price: 0},
        {id: 3410, img: h411, price: 0},
        {id: 3411, img: h412, price: 0},
        {id: 3412, img: h413, price: 0},
        {id: 3413, img: h414, price: 0},
        {id: 3414, img: h415, price: 0},
        {id: 3415, img: h416, price: 0},
        {id: 3416, img: h417, price: 0},
        {id: 3417, img: h418, price: 0},
        {id: 3418, img: h419, price: 0},
        {id: 3419, img: h420, price: 0},
        {id: 3420, img: h421, price: 0},
        {id: 3421, img: h422, price: 0},
        {id: 3422, img: h423, price: 0},
        {id: 3423, img: h424, price: 0},
        {id: 3424, img: h425, price: 0},
        {id: 3425, img: h426, price: 0},
        {id: 3426, img: h427, price: 0},
        {id: 3427, img: h428, price: 0},
        {id: 3428, img: h429, price: 0},
        {id: 3429, img: h430, price: 0},
        {id: 3430, img: h431, price: 0},
        {id: 3431, img: h432, price: 0},
    ]
    const locks = [
        {id: 4000, img: l1, price: 0},
        {id: 4001, img: l2, price: 0},
        {id: 4002, img: l3, price: 0},
        {id: 4003, img: l4, price: 0},
        {id: 4004, img: l5, price: 0},
        {id: 4005, img: l6, price: 0},
        {id: 4006, img: l7, price: 0},
        {id: 4007, img: l8, price: 0},
        {id: 4008, img: l9, price: 0},
        {id: 4009, img: l10, price: 0},
        {id: 4010, img: l11, price: 0},
        {id: 4011, img: l12, price: 0},
        {id: 4012, img: l13, price: 0},
        {id: 4013, img: l14, price: 0},
        {id: 4014, img: l15, price: 0},
        {id: 4015, img: l16, price: 0},
        {id: 4016, img: l17, price: 0},
        {id: 4017, img: l18, price: 0},
        {id: 4018, img: l19, price: 0},
        {id: 4019, img: l20, price: 0},
        {id: 4020, img: l21, price: 0},
        {id: 4021, img: l22, price: 0},
        {id: 4022, img: l23, price: 0},
        {id: 4023, img: l24, price: 0},
        {id: 4024, img: l25, price: 0},
        {id: 4025, img: l26, price: 0},
        {id: 4026, img: l27, price: 0},
        {id: 4027, img: l28, price: 0},
        {id: 4028, img: l29, price: 0},
        {id: 4029, img: l30, price: 0},
        {id: 4030, img: l31, price: 0},
        {id: 4031, img: l32, price: 0},
        {id: 4032, img: l33, price: 0},
        {id: 4033, img: l34, price: 0},
        {id: 4034, img: l35, price: 0},
        {id: 4035, img: l36, price: 0},
        {id: 4036, img: l37, price: 0},
        {id: 4037, img: l38, price: 0},
        {id: 4038, img: l39, price: 0},
        {id: 4039, img: l40, price: 0},
        {id: 4040, img: l41, price: 0},
        {id: 4041, img: l42, price: 0},
        {id: 4042, img: l43, price: 0},
        {id: 4043, img: l44, price: 0},
        {id: 4044, img: l45, price: 0},
        {id: 4045, img: l46, price: 0},
        {id: 4046, img: l47, price: 0},
        {id: 4047, img: l48, price: 0},
        {id: 4048, img: l49, price: 0},
        {id: 4049, img: l50, price: 0},
        {id: 4050, img: l51, price: 0},
        {id: 4051, img: l52, price: 0},
        {id: 4052, img: l53, price: 0},
        {id: 4053, img: l54, price: 0},
        {id: 4054, img: l55, price: 0},
        {id: 4055, img: l56, price: 0},
        {id: 4056, img: l57, price: 0},
        {id: 4057, img: l58, price: 0},
        {id: 4058, img: l59, price: 0},
        {id: 4059, img: l60, price: 0},
        {id: 4060, img: l61, price: 0},
        {id: 4061, img: l62, price: 0},
        {id: 4062, img: l63, price: 0},
        {id: 4063, img: l64, price: 0},
        {id: 4064, img: l65, price: 0},
        {id: 4065, img: l66, price: 0},
        {id: 4066, img: l67, price: 0},
        {id: 4067, img: l68, price: 0},
        {id: 4068, img: l69, price: 0},
        {id: 4069, img: l70, price: 0},
        {id: 4070, img: l71, price: 0},
        {id: 4071, img: l72, price: 0},
        {id: 4072, img: l73, price: 0},
        {id: 4073, img: l74, price: 0},
        {id: 4074, img: l75, price: 0},
        {id: 4075, img: l76, price: 0},
    ]
    const loops = [
        {id: 5000, img: lo1, price: 0},
        {id: 5001, img: lo2, price: 0},
        {id: 5002, img: lo3, price: 0},
        {id: 5003, img: lo4, price: 0},
        {id: 5004, img: lo5, price: 0},
        {id: 5005, img: lo6, price: 0},
        {id: 5006, img: lo7, price: 0},
        {id: 5007, img: lo8, price: 0},
    ]
    const other: any[] = [

    ]
    const ref = useRef(null);
    const [listSlice, setListSlice] = useState(0)
    const [currnum, setCurrnum] = useState(1)
    const [img, setImg] = useState(h1)
    const [currlist, setCurrlist] = useState(handles.concat(locks).concat(loops).concat(other))
    const GoRight = () => {
        if (currnum < Math.ceil(currlist.length / 12)){
            setCurrnum(currnum + 1)
            setListSlice(listSlice + 12)
        }
    }
    const params = useSearchParams()
    const filter = params.get('filter')
    useEffect(() => {
        if (filter == "handles"){
            setCurrlist(handles)
        }
        else if (filter == "locks"){
            setCurrlist(locks)
        }
        else if(filter == "loops"){
            setCurrlist(loops)
        }
        else if (filter == "other"){
            setCurrlist(other)
        }
        else{
            setCurrlist(handles.concat(locks).concat(loops).concat(other))
        }
    }, [filter])
    const OpenImage = (ig: StaticImageData) => {
        setImg(ig)
        document.querySelector("body")?.classList.toggle(styles.noscroll)
        document.getElementsByClassName(styles.OpenImage)[0].classList.toggle(styles.Open)
    }
    const handleClick = (e: any) => {
        //@ts-ignore
        if (ref.current && !ref.current.contains(e.target)){
            OpenImage(img)
        }
    }
    const FiltersOpen = () => {
        document.getElementsByClassName(styles.Filters)[0].classList.toggle(styles.Filters_Open)
    }
    const Card = (props: CardProps) => {
        return(
            <div className={styles.CardFur} onClick={() => OpenImage(props.img)}>
                <Image src={props.img} className={styles.CardFur_Img} width={160} height={170} alt='door'></Image>
                <p>{props.id}</p>
            </div>
        )
    }
    return (
        <div className={styles.CatalogPage}>
            <Suspense>
            <div className={styles.CatalogHeader}>
                <Link href="/#catalog" className={styles.CatalogHeader_Link}>Каталог</Link>
                <Image src={arrow} width={12} height={12} alt='arrow' style={{transform: "rotate(90deg)"}} ></Image>
                <Link href="/catalog/indoors" className={styles.CatalogHeader_Link}>Дверная фурнитура</Link>
                {filter == "handles" && 
                <>
                    <Image src={arrow} width={12} height={12} alt='arrow' style={{transform: "rotate(90deg)"}} ></Image>
                    <Link href="/catalog/indoors" className={styles.CatalogHeader_Link}>Дверные ручки</Link>
                </>}
                {filter == "locks" && 
                <>
                    <Image src={arrow} width={12} height={12} alt='arrow' style={{transform: "rotate(90deg)"}} ></Image>
                    <Link href="/catalog/indoors" className={styles.CatalogHeader_Link}>Дверные замки</Link>
                </>}
                {filter == "loops" && 
                <>
                    <Image src={arrow} width={12} height={12} alt='arrow' style={{transform: "rotate(90deg)"}} ></Image>
                    <Link href="/catalog/indoors" className={styles.CatalogHeader_Link}>Дверные петли</Link>
                </>}
                {filter == "other" && 
                <>
                    <Image src={arrow} width={12} height={12} alt='arrow' style={{transform: "rotate(90deg)"}} ></Image>
                    <Link href="/catalog/indoors" className={styles.CatalogHeader_Link}>Другое</Link>
                </>}
                <div style={{marginLeft: "auto"}}>
                    <button className={styles.FiltersBtn} onClick={FiltersOpen}>Фильтры</button>
                    <div className={styles.Filters}>
                        <Link href="/catalog/furniture?filter=handles" className={classNames(styles.Filters_Btn, filter == "handles" ? styles.Filters_Btn_Select: "")}>Ручки</Link>
                        <Link href="/catalog/furniture?filter=locks" className={classNames(styles.Filters_Btn, filter == "locks" ? styles.Filters_Btn_Select: "")}>Замки</Link>
                        <Link href="/catalog/furniture?filter=loops" className={classNames(styles.Filters_Btn, filter == "loops" ? styles.Filters_Btn_Select: "")}>Петли</Link>
                        <Link href="/catalog/furniture?filter=other" className={classNames(styles.Filters_Btn, filter == "other" ? styles.Filters_Btn_Select: "")}>Другое</Link>
                        <Link href="/catalog/furniture" className={styles.Filters_Btn}>Отчистить фильтры</Link>
                    </div>
                </div>
            </div>
            <div className={styles.Cards}>
                {currlist.slice(0, listSlice + 12).map((card: CardProps) => {
                    return(
                        <Card {...card}></Card>
                    )
                })}
            </div>
            <div className={styles.Cards_Arrows}>
                {currnum < Math.ceil(currlist.length / 12) && <button onClick={GoRight} className={styles.MoreBtn}>Посмотреть ещё</button>}
            </div>
            <div className={styles.OpenImage} onClick={handleClick}>
                <div style={{display: "flex"}}>
                    <Image className={styles.OpenImage_Img} src={img} ref={ref} alt=''></Image>
                    <Image src={cross} className={styles.OpenImage_Cross} width={50} height={50} onClick={() => OpenImage(img)} alt=''></Image>
                </div>
            </div>
            </Suspense>
        </div>
    );
}
 
export default Furniture;