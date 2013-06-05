var totalDonors = {
    title : 'Total Donors',
    dr:{
        data:{
            e:{
                metric:205,
                text:'Headquarter: <b>Dhankuta</b>',
                img:'assets/img/dhankuta.jpg'
            },
            c:{
                metric:354,
                text:'Headquarter: <b>Kathmandu</b>',
                img:'assets/img/kathmandu.jpg'
            },
            w:{
                metric:168,
                text:'Headquarter: <b>Pokhara</b>',
                img:'assets/img/pokhara.jpg'

            },
            mw:{
                metric:85,
                text:'Headquarter: <b>Birendranagar</b>',
                img:'assets/img/birendranagar.jpg'

            },
            fw:{
                metric:130,
                text:'Headquarter: <b>Dipayal</b>',
                img:'assets/img/dipayal.jpg'

            }
        },
        template:'#totalDonorRegTemplate'
    },
    district:{
        data:{
            taplejung:{metric:35, text:''},
            panchthar:{metric:160, text:''},
            illam:{metric:174, text:''},
            jhapa:{metric:505, text:''},
            morang:{metric:520, text:''},
            sunsari:{metric:598, text:''},
            dhankuta:{metric:184, text:''},
            terathum:{metric:150, text:''},
            sankhuwasava:{metric:46, text:''},
            bhojpur:{metric:122, text:''},
            solukhumbu:{metric:32, text:''},
            okhaldhunga:{metric:138, text:''},
            khotang:{metric:131, text:''},
            udaypur:{metric:156, text:''},
            saptari:{metric:474, text:''},
            siraha:{metric:541, text:''},
            dhanusa:{metric:651, text:''},
            mahattori:{metric:645, text:''},
            sarlahi:{metric:611, text:''},
            sindhuli:{metric:118, text:''},
            ramechhap:{metric:133, text:''},
            dolakha:{metric:86, text:''},
            sindhupalchok:{metric:114, text:''},
            kavre:{metric:279, text:''},
            lalitpur:{metric:1212, text:''},
            bhaktapur:{metric:2546, text:''},
            kathmandu:{metric:4408, a:123, b:1234, o:1234, ab:123, text:''},
            nuwakot:{metric:249, text:''},
            rasuwa:{metric:28, text:''},
            dhading:{metric:175, text:''},
            makwanpur:{metric:176, text:''},
            rautahat:{metric:618, text:''},
            bara:{metric:589, text:''},
            parsa:{metric:445, text:''},
            chitwan:{metric:255, text:''},
            gorkha:{metric:75, text:''},
            lamjung:{metric:100, text:''},
            tanahu:{metric:214, text:''},
            syanja:{metric:247, text:''},
            kaski:{metric:243, text:''},
            manang:{metric:3, text:''},
            mustang:{metric:4, text:''},
            myagdi:{metric:50, text:''},
            parbat:{metric:298, text:''},
            baglung:{metric:151, text:''},
            gulmi:{metric:247, text:''},
            palpa:{metric:196, text:''},
            nawalparasi:{metric:294, text:''},
            rupandehi:{metric:652, text:''},
            kapilvastu:{metric:328, text:''},
            arghakhanchi:{metric:168, text:''},
            pyuthan:{metric:180, text:''},
            rolpa:{metric:121, text:''},
            rukum:{metric:73, text:''},
            salyan:{metric:167, text:''},
            dang:{metric:189, text:''},
            banke:{metric:211, text:''},
            bardia:{metric:211, text:''},
            surkhet:{metric:147, text:''},
            dailekh:{metric:176, text:''},
            jajarkot:{metric:77, text:''},
            dolpa:{metric:5, text:''},
            jumla:{metric:43, text:''},
            kalikot:{metric:81, text:''},
            mugu:{metric:16, text:''},
            humla:{metric:9, text:''},
            bajura:{metric:62, text:''},
            bajhang:{metric:57, text:''},
            achham:{metric:154, text:''},
            doti:{metric:105, text:''},
            kailali:{metric:238, text:''},
            kanchanpur:{metric:276, text:''},
            dadeldhura:{metric:92, text:''},
            baitadi:{metric:166, text:''},
            darchula:{metric:57, text:''}
        },
        template:'#totalDonorDistTemplate'
    }
}

var aDonors = {
    title : 'A Donors',
    dr:{
        data:{
            e:{
                metric:205,
                text:'Headquarter: <b>Dhankuta</b>',
                img:'assets/img/dhankuta.jpg'
            },
            c:{
                metric:354,
                text:'Headquarter: <b>Kathmandu</b>',
                img:'assets/img/kathmandu.jpg'
            },
            w:{
                metric:168,
                text:'Headquarter: <b>Pokhara</b>',
                img:'assets/img/pokhara.jpg'

            },
            mw:{
                metric:85,
                text:'Headquarter: <b>Birendranagar</b>',
                img:'assets/img/birendranagar.jpg'

            },
            fw:{
                metric:130,
                text:'Headquarter: <b>Dipayal</b>',
                img:'assets/img/dipayal.jpg'

            }
        },
        template:'#aDonorRegTemplate'
    },
    district:{
        data:{
            taplejung:{metric:35, text:''},
            panchthar:{metric:160, text:''},
            illam:{metric:174, text:''},
            jhapa:{metric:505, text:''},
            morang:{metric:520, text:''},
            sunsari:{metric:598, text:''},
            dhankuta:{metric:184, text:''},
            terathum:{metric:150, text:''},
            sankhuwasava:{metric:46, text:''},
            bhojpur:{metric:122, text:''},
            solukhumbu:{metric:32, text:''},
            okhaldhunga:{metric:138, text:''},
            khotang:{metric:131, text:''},
            udaypur:{metric:156, text:''},
            saptari:{metric:474, text:''},
            siraha:{metric:541, text:''},
            dhanusa:{metric:651, text:''},
            mahattori:{metric:645, text:''},
            sarlahi:{metric:611, text:''},
            sindhuli:{metric:118, text:''},
            ramechhap:{metric:133, text:''},
            dolakha:{metric:86, text:''},
            sindhupalchok:{metric:114, positive:123, negative:1234 text:''},
            kavre:{metric:279, text:''},
            lalitpur:{metric:1212, text:''},
            bhaktapur:{metric:2546, text:''},
            kathmandu:{metric:1234, text:''},
            nuwakot:{metric:249, text:''},
            rasuwa:{metric:28, text:''},
            dhading:{metric:175, text:''},
            makwanpur:{metric:176, text:''},
            rautahat:{metric:618, text:''},
            bara:{metric:589, text:''},
            parsa:{metric:445, text:''},
            chitwan:{metric:255, text:''},
            gorkha:{metric:75, text:''},
            lamjung:{metric:100, text:''},
            tanahu:{metric:214, text:''},
            syanja:{metric:247, text:''},
            kaski:{metric:243, text:''},
            manang:{metric:3, text:''},
            mustang:{metric:4, text:''},
            myagdi:{metric:50, text:''},
            parbat:{metric:298, text:''},
            baglung:{metric:151, text:''},
            gulmi:{metric:247, text:''},
            palpa:{metric:196, text:''},
            nawalparasi:{metric:294, text:''},
            rupandehi:{metric:652, text:''},
            kapilvastu:{metric:328, text:''},
            arghakhanchi:{metric:168, text:''},
            pyuthan:{metric:180, text:''},
            rolpa:{metric:121, text:''},
            rukum:{metric:73, text:''},
            salyan:{metric:167, text:''},
            dang:{metric:189, text:''},
            banke:{metric:211, text:''},
            bardia:{metric:211, text:''},
            surkhet:{metric:147, text:''},
            dailekh:{metric:176, text:''},
            jajarkot:{metric:77, text:''},
            dolpa:{metric:5, text:''},
            jumla:{metric:43, text:''},
            kalikot:{metric:81, text:''},
            mugu:{metric:16, text:''},
            humla:{metric:9, text:''},
            bajura:{metric:62, text:''},
            bajhang:{metric:57, text:''},
            achham:{metric:154, text:''},
            doti:{metric:105, text:''},
            kailali:{metric:238, text:''},
            kanchanpur:{metric:276, text:''},
            dadeldhura:{metric:92, text:''},
            baitadi:{metric:166, text:''},
            darchula:{metric:57, text:''}
        },
        template:'#aDonorDistTemplate'
    }
}

var bDonors = {
    title : 'B Donors',
    dr:{
        data:{
            e:{
                metric:205,
                text:'Headquarter: <b>Dhankuta</b>',
                img:'assets/img/dhankuta.jpg'
            },
            c:{
                metric:354,
                text:'Headquarter: <b>Kathmandu</b>',
                img:'assets/img/kathmandu.jpg'
            },
            w:{
                metric:168,
                text:'Headquarter: <b>Pokhara</b>',
                img:'assets/img/pokhara.jpg'

            },
            mw:{
                metric:85,
                text:'Headquarter: <b>Birendranagar</b>',
                img:'assets/img/birendranagar.jpg'

            },
            fw:{
                metric:130,
                text:'Headquarter: <b>Dipayal</b>',
                img:'assets/img/dipayal.jpg'

            }
        },
        template:'#drTemplate'
    },
    district:{
        data:{
            taplejung:{metric:35, text:''},
            panchthar:{metric:160, text:''},
            illam:{metric:174, text:''},
            jhapa:{metric:505, text:''},
            morang:{metric:520, text:''},
            sunsari:{metric:598, text:''},
            dhankuta:{metric:184, text:''},
            terathum:{metric:150, text:''},
            sankhuwasava:{metric:46, text:''},
            bhojpur:{metric:122, text:''},
            solukhumbu:{metric:32, text:''},
            okhaldhunga:{metric:138, text:''},
            khotang:{metric:131, text:''},
            udaypur:{metric:156, text:''},
            saptari:{metric:474, text:''},
            siraha:{metric:541, text:''},
            dhanusa:{metric:651, text:''},
            mahattori:{metric:645, text:''},
            sarlahi:{metric:611, text:''},
            sindhuli:{metric:118, text:''},
            ramechhap:{metric:133, text:''},
            dolakha:{metric:86, text:''},
            sindhupalchok:{metric:114, text:''},
            kavre:{metric:279, text:''},
            lalitpur:{metric:1212, text:''},
            bhaktapur:{metric:2546, text:''},
            kathmandu:{metric:114, positive:123, negative:1234 text:''},
            nuwakot:{metric:249, text:''},
            rasuwa:{metric:28, text:''},
            dhading:{metric:175, text:''},
            makwanpur:{metric:176, text:''},
            rautahat:{metric:618, text:''},
            bara:{metric:589, text:''},
            parsa:{metric:445, text:''},
            chitwan:{metric:255, text:''},
            gorkha:{metric:75, text:''},
            lamjung:{metric:100, text:''},
            tanahu:{metric:214, text:''},
            syanja:{metric:247, text:''},
            kaski:{metric:243, text:''},
            manang:{metric:3, text:''},
            mustang:{metric:4, text:''},
            myagdi:{metric:50, text:''},
            parbat:{metric:298, text:''},
            baglung:{metric:151, text:''},
            gulmi:{metric:247, text:''},
            palpa:{metric:196, text:''},
            nawalparasi:{metric:294, text:''},
            rupandehi:{metric:652, text:''},
            kapilvastu:{metric:328, text:''},
            arghakhanchi:{metric:168, text:''},
            pyuthan:{metric:180, text:''},
            rolpa:{metric:121, text:''},
            rukum:{metric:73, text:''},
            salyan:{metric:167, text:''},
            dang:{metric:189, text:''},
            banke:{metric:211, text:''},
            bardia:{metric:211, text:''},
            surkhet:{metric:147, text:''},
            dailekh:{metric:176, text:''},
            jajarkot:{metric:77, text:''},
            dolpa:{metric:5, text:''},
            jumla:{metric:43, text:''},
            kalikot:{metric:81, text:''},
            mugu:{metric:16, text:''},
            humla:{metric:9, text:''},
            bajura:{metric:62, text:''},
            bajhang:{metric:57, text:''},
            achham:{metric:154, text:''},
            doti:{metric:105, text:''},
            kailali:{metric:238, text:''},
            kanchanpur:{metric:276, text:''},
            dadeldhura:{metric:92, text:''},
            baitadi:{metric:166, text:''},
            darchula:{metric:57, text:''}
        },
        template:'#districtTemplate'
    }
}

var abDonors = {
    title : 'AB Donors',
    dr:{
        data:{
            e:{
                metric:205,
                text:'Headquarter: <b>Dhankuta</b>',
                img:'assets/img/dhankuta.jpg'
            },
            c:{
                metric:354,
                text:'Headquarter: <b>Kathmandu</b>',
                img:'assets/img/kathmandu.jpg'
            },
            w:{
                metric:168,
                text:'Headquarter: <b>Pokhara</b>',
                img:'assets/img/pokhara.jpg'

            },
            mw:{
                metric:85,
                text:'Headquarter: <b>Birendranagar</b>',
                img:'assets/img/birendranagar.jpg'

            },
            fw:{
                metric:130,
                text:'Headquarter: <b>Dipayal</b>',
                img:'assets/img/dipayal.jpg'

            }
        },
        template:'#drTemplate'
    },
    district:{
        data:{
            taplejung:{metric:35, text:''},
            panchthar:{metric:160, text:''},
            illam:{metric:174, text:''},
            jhapa:{metric:505, text:''},
            morang:{metric:520, text:''},
            sunsari:{metric:598, text:''},
            dhankuta:{metric:184, text:''},
            terathum:{metric:150, text:''},
            sankhuwasava:{metric:46, text:''},
            bhojpur:{metric:122, text:''},
            solukhumbu:{metric:32, text:''},
            okhaldhunga:{metric:138, text:''},
            khotang:{metric:131, text:''},
            udaypur:{metric:156, text:''},
            saptari:{metric:474, text:''},
            siraha:{metric:541, text:''},
            dhanusa:{metric:651, text:''},
            mahattori:{metric:645, text:''},
            sarlahi:{metric:611, text:''},
            sindhuli:{metric:118, text:''},
            ramechhap:{metric:133, text:''},
            dolakha:{metric:86, text:''},
            sindhupalchok:{metric:114, text:''},
            kavre:{metric:279, text:''},
            lalitpur:{metric:1212, text:''},
            bhaktapur:{metric:2546, text:''},
            kathmandu:{metric:114, positive:123, negative:1234 text:''},
            nuwakot:{metric:249, text:''},
            rasuwa:{metric:28, text:''},
            dhading:{metric:175, text:''},
            makwanpur:{metric:176, text:''},
            rautahat:{metric:618, text:''},
            bara:{metric:589, text:''},
            parsa:{metric:445, text:''},
            chitwan:{metric:255, text:''},
            gorkha:{metric:75, text:''},
            lamjung:{metric:100, text:''},
            tanahu:{metric:214, text:''},
            syanja:{metric:247, text:''},
            kaski:{metric:243, text:''},
            manang:{metric:3, text:''},
            mustang:{metric:4, text:''},
            myagdi:{metric:50, text:''},
            parbat:{metric:298, text:''},
            baglung:{metric:151, text:''},
            gulmi:{metric:247, text:''},
            palpa:{metric:196, text:''},
            nawalparasi:{metric:294, text:''},
            rupandehi:{metric:652, text:''},
            kapilvastu:{metric:328, text:''},
            arghakhanchi:{metric:168, text:''},
            pyuthan:{metric:180, text:''},
            rolpa:{metric:121, text:''},
            rukum:{metric:73, text:''},
            salyan:{metric:167, text:''},
            dang:{metric:189, text:''},
            banke:{metric:211, text:''},
            bardia:{metric:211, text:''},
            surkhet:{metric:147, text:''},
            dailekh:{metric:176, text:''},
            jajarkot:{metric:77, text:''},
            dolpa:{metric:5, text:''},
            jumla:{metric:43, text:''},
            kalikot:{metric:81, text:''},
            mugu:{metric:16, text:''},
            humla:{metric:9, text:''},
            bajura:{metric:62, text:''},
            bajhang:{metric:57, text:''},
            achham:{metric:154, text:''},
            doti:{metric:105, text:''},
            kailali:{metric:238, text:''},
            kanchanpur:{metric:276, text:''},
            dadeldhura:{metric:92, text:''},
            baitadi:{metric:166, text:''},
            darchula:{metric:57, text:''}
        },
        template:'#districtTemplate'
    }
}


var oDonors = {
    title : 'O Donors',
    dr:{
        data:{
            e:{
                metric:205,
                text:'Headquarter: <b>Dhankuta</b>',
                img:'assets/img/dhankuta.jpg'
            },
            c:{
                metric:354,
                text:'Headquarter: <b>Kathmandu</b>',
                img:'assets/img/kathmandu.jpg'
            },
            w:{
                metric:168,
                text:'Headquarter: <b>Pokhara</b>',
                img:'assets/img/pokhara.jpg'

            },
            mw:{
                metric:85,
                text:'Headquarter: <b>Birendranagar</b>',
                img:'assets/img/birendranagar.jpg'

            },
            fw:{
                metric:130,
                text:'Headquarter: <b>Dipayal</b>',
                img:'assets/img/dipayal.jpg'

            }
        },
        template:'#drTemplate'
    },
    district:{
        data:{
            taplejung:{metric:35, text:''},
            panchthar:{metric:160, text:''},
            illam:{metric:174, text:''},
            jhapa:{metric:505, text:''},
            morang:{metric:520, text:''},
            sunsari:{metric:598, text:''},
            dhankuta:{metric:184, text:''},
            terathum:{metric:150, text:''},
            sankhuwasava:{metric:46, text:''},
            bhojpur:{metric:122, text:''},
            solukhumbu:{metric:32, text:''},
            okhaldhunga:{metric:138, text:''},
            khotang:{metric:131, text:''},
            udaypur:{metric:156, text:''},
            saptari:{metric:474, text:''},
            siraha:{metric:541, text:''},
            dhanusa:{metric:651, text:''},
            mahattori:{metric:645, text:''},
            sarlahi:{metric:611, text:''},
            sindhuli:{metric:118, text:''},
            ramechhap:{metric:133, text:''},
            dolakha:{metric:86, text:''},
            sindhupalchok:{metric:114, text:''},
            kavre:{metric:279, text:''},
            lalitpur:{metric:1212, text:''},
            bhaktapur:{metric:2546, text:''},
            kathmandu:{metric:114, positive:123, negative:1234 text:''},
            nuwakot:{metric:249, text:''},
            rasuwa:{metric:28, text:''},
            dhading:{metric:175, text:''},
            makwanpur:{metric:176, text:''},
            rautahat:{metric:618, text:''},
            bara:{metric:589, text:''},
            parsa:{metric:445, text:''},
            chitwan:{metric:255, text:''},
            gorkha:{metric:75, text:''},
            lamjung:{metric:100, text:''},
            tanahu:{metric:214, text:''},
            syanja:{metric:247, text:''},
            kaski:{metric:243, text:''},
            manang:{metric:3, text:''},
            mustang:{metric:4, text:''},
            myagdi:{metric:50, text:''},
            parbat:{metric:298, text:''},
            baglung:{metric:151, text:''},
            gulmi:{metric:247, text:''},
            palpa:{metric:196, text:''},
            nawalparasi:{metric:294, text:''},
            rupandehi:{metric:652, text:''},
            kapilvastu:{metric:328, text:''},
            arghakhanchi:{metric:168, text:''},
            pyuthan:{metric:180, text:''},
            rolpa:{metric:121, text:''},
            rukum:{metric:73, text:''},
            salyan:{metric:167, text:''},
            dang:{metric:189, text:''},
            banke:{metric:211, text:''},
            bardia:{metric:211, text:''},
            surkhet:{metric:147, text:''},
            dailekh:{metric:176, text:''},
            jajarkot:{metric:77, text:''},
            dolpa:{metric:5, text:''},
            jumla:{metric:43, text:''},
            kalikot:{metric:81, text:''},
            mugu:{metric:16, text:''},
            humla:{metric:9, text:''},
            bajura:{metric:62, text:''},
            bajhang:{metric:57, text:''},
            achham:{metric:154, text:''},
            doti:{metric:105, text:''},
            kailali:{metric:238, text:''},
            kanchanpur:{metric:276, text:''},
            dadeldhura:{metric:92, text:''},
            baitadi:{metric:166, text:''},
            darchula:{metric:57, text:''}
        },
        template:'#districtTemplate'
    }
}