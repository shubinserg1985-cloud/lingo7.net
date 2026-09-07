window.mountMock_library = function (__R, __P) {
  const location = { search: (__P && __P.search) || '' };

const ICONS = {"catalog": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA4CAYAAAC2TwutAAACtElEQVR4AeyW3XFVMQyELzzQBE/QBRVQDnRAC1ALhdAB0An4y2TvKIrl47/jJDdmjrCtn9WunUn09nKj/7awl/aw+8X2iz2TG3iVP4of0uV/d5aO2a82lzzM4mYBR53Ri9H4dwL/4uxfOkMsLdcPX5R7TUobYfpc6j1mSh/7ImEIipAhphhktc+ttYQtZg6n2RcJawYKCuwF2X2QPs99trB5TBuRtjBzYT+CvXFft1+vu/LGYpYzK6PRi30s1Fuyf1JeRMr7azET5PgXCYPwmwQPGWv4kvvBh1D8Pg+/TWzBtHVd+0iYwCBjTf7c2pNHTQ5r2HckbLjBEwF8etnC4lv7dqvCPh8JYyRibJLFd1QfOQPzUfdIGEIYTpnhGIVk+CD2COjeQYxa2b37bsFHfSvmXXHrf5GwEg7EfHyUdA7T92g6R8J4oSagQrJIz8QstLu8JxgJI9Ziq0jXcHpH0ixhYD0X+wuRHmF+BgRn1GZi8gvqEglj7ovItpJQfgkz6tXtj4QxwzHYQkoGMXzEfENi3qezhmHqqBceK3X4lKOa4TUSJmAayiAmv1+JQRCyMpH2ucJjpc7HZ5x/HQlrbQJZ2Vmkazjd7Kz4c/aL1dzmkpwjYcx+1kqkevKoKWF2xyJhNOTvAeOQNWZCYrYhPp/LGb/NY4/f4rHH5zHJHbJIWDQi4YeMbYrPnrX3/pxQ5XpM+bvXVmG+UYksufYlvFDip1kkbFbDCWL6qJwtrI/VhKoeYUwWam338tn1KK7c2jzlH66RMMahw+KUUJouIGvjtZgJdvyLhEEoN/tBjpHJdvZ5CMrltWBa/K59JExgiJBBDFPMrsrRGuVRoxxW8jD8U+1I2NRmK8G2sJW3PaPXfrEZt7gSY7/Yytue0Wu/2IxbXImxX2zlbc/otV9sxi2uxPgPAAD//3Om0VgAAAAGSURBVAMA5wKKcRgg9+oAAAAASUVORK5CYII=", "practice": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABECAYAAAAWVrIgAAAFL0lEQVR4AeyZ227UQAxACz/FEwIJxBchkEA8IZBAfBEXCcQTf8Wcal1NvXbG40myyTYo7iSOryeebLc8vjn+DRHYKsCnpSstRbW945IAPxYcyL+yavlWdFq0Db5ALqaXO9YGSNMC4lVpGylL6sAXyMQj7kVgrgGQ5mgSoekUrYYTcS8Cc0mAAo7mGv3Pept8AnPxqVwCYA+47wXd65M8KWtExB7f4jJ5AHJRiHMCpNDINqVxAfWhtP/3JGUJHWKPL3EEqOcMROqiPs8mrZ8LIFNHoV4hGppnl9EL0BZM6qPOTA7XZw6AFMV7x0oi4JgW6/7cOoHJVFqxqZNptO6ldCMAn5WMFENR5fTsYCLWAqeTA5L8Hkjq1j6p6yxA4H11Mv4seoovy8UPAfnGqASI9GHciquyAD14gHsfT7+a5Z+SSSCW07vD6+POoHWSAciTs+ICz9JvRedB9PoJ1d0L0Bv5rcMTGB7ET2LQu/YABJ418tbW6K1jTXsL4stSAP2Vpe/oAejBo6C+rJe3pmY+7OpKrP7q++Z5FKD1dJg8CjED70Bpfdh1vw+jAK2ns2d48nyH390RgN70SRF7X/VW7vpAiQC81umTB6+3Mh8ocq+5tgBe+/R5gMJT2AJoJbiGd5/uS2/j8BRmAOrk13Ctt3G4pxZA/ZcW/aTCiXZgqHuzXl9nbbQA6lH+cRZhFcVFkujhMYtoATSdOpWfiz3yvKw9By9yJDQJp8DYIz0+J9ebR3JyWvX1SX1/6QX4+7578wpwL4oV8qWsXJdl8gA03wiYfoRfo9BNOpWbxMYewYfrog4f/PW8Nqbm+to87wVoBnGUNK2L0NeWq7V1LF3tm81Vx+gdjlvfXoAUeusY+OEV1BND0rTAz5lLcobWFsBfKkprEpS5eek1K8Z6K6F/y4+EtHLVITMP9qYFsE6QOa+/rPMw6msvHk3XwDhH59mLvo4dzSW+6bUXYGsrWYXQGPLOuunoAIYPwrljdqbGHunJJUH07uIhyD13bQG0Cun9dHOTb+yGHg7rVXJWcgvgmUNR6ERF9XCPCEBrlK9tClMfIIxNBKC1jZnCdFISb0z4JV+XFHr3RgAS2JpCkl4DRKsHPvnpuylRgNYUEtyHyN19CD3oSkPTh1MUILbeU6EA6ynis3Wx6vb6NHvpAchTsbYygfcIEXjUTf210Gd9PXneA5BA3lbmHsVQFOd7EOrVdXZNH869APGZSkJRe4DIn8vopRb66po+nDMASUIy/C0BoqXfis6CR230xdolGYAkINkURGy2KB48vj+n6s0CJNmeIPJa8eANDcIIQIHofTJzfwsCOO+1AjwGIV3nKMB04hUc+b4OPC8V23YIHoHnAMj3YmKJXHoiBZyuq64PeHI9tM4BcKiAmZwFGhPngSMVW3bqd1lsumQUIC9nnbD1h8i6Wc6Jgeg43jW2CL4AQ6agEYddwdQNb1mC1XIPYH1j4NwrUhqum+WcFzwCiIhgi+DbKlPAzTp1ddJRgDRSx2OL1Nf1pEQarn1HzhcHJ8WNAGSiJI6s/McMeoRpAvBa4AQaW3WxiZNGZc0CZLIsMOhEJIe10izTymrdj+rwBxiyGrS6uCxAJquOEz2XhmmWdyUrzSMA1YK96LDRgn809yJ2WYC9xQCC5qcaBqgW7EXXm3MV+yUBCrQWuFUaXSpJFiDbSmoClAiwRJgesbnaNQuQbVWDAhZytaC8xrIAvXgPTn8AHHzkB8AD4BiBUe9jAgcJHgAPgIMEBt2PCRwE+B8AAP//9ueEEgAAAAZJREFUAwBS2+WJ4ddKuwAAAABJRU5ErkJggg==", "bolt": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAABICAYAAACqT5alAAADG0lEQVR4AeyYi3EcIQxA12kraSFpJzWknaSFuC5739zIgzFCsCsBY+M5mVs+kp4Ewt5vx5yfl9OsJudQ3GcG8Pc4HFvzaGBg/9tuxc0YDWzB/otDfWgeCUx2H1b133/0IZ+RUcDAWtn1ITK0jAJeApZYjAD+i6FGeW6cd3laNDBb+edl7wIWRgMvs5UldpHA2lb+cRpHzmb8Jwq4tpW1cxp+BxPeCGBgta0smf2N8UzC72DsRQDXYCW70wqZNzDZJZAlEdjS2LA+T2Bga9m1oIYExBO4BjsExorocRyHFzDZLdmj8uaw2tzSevc+D2AAtOz+cvf4pkIPYA1WrqDcxdKVxBztlU9LP0FHhyl3gWt/TeVb2XTm4oTSsVFV3QEmqtp9WoPV1qhOGgNdx+YOcO9WNvy+NPzUu+oq8ApbWasR1RhcAb66lcURHG0RzqasyVvW145NPv/tuRcY2LtbGUctwUHtrF+GRWkvcA0WCHR6iGaHrN+y0wNMdjUY7lbOdU20tXk/927eJ89dFVkWpW0rMLBa1NHH9rMEHcytCQHTxrsrcklRK3ANtqS31GdtRQJC0EprObel/u6+FmAc6VbcuQAbWlCBtYLVbM4CrjnSbMSYWLPhCosfFjBzMNojVFLWpVLqk3Ets6xxy6wYs4Ax2CuiO221F3ShFTl14PH9cHsBIPpotcLDWCrhFTk1Jt+tDMs875ZzqwWG4+Nt703fKGCOhRgFVju3wKZzZY1b6w0MTM05xqfB4pg3MDprosGGVOSSIyOAgcH28IqM0Vy8gfknIrfBlTSlIueO8OwNXKq8bONSP/YpUrTDxBu4x3FgQytyyZlZwFNgCYAnMFcOOi2hiA3PrDjlCSw6rfb2WwvLQG18NPBTzZkRY57ApSspZeDcps9TvnsCa1cPYMBOO7c4IOIJLDrzdhlYHIsGnlqRAXwn54MnMAUpl6kV+eT78PEE/qB8xY4NvGJWPH3aGfaM5oq6doZXzIqnTzvDntFcUdfO8IpZ8fRpZ9gzmivq2hleMSuePn2pDBO4DUwUPrPsDH/m7ML2CgAA///fuKEiAAAABklEQVQDAIy7h5ErLN5CAAAAAElFTkSuQmCC", "allbooks": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAACKUlEQVR4AeyWO1IDMQyGGe5ETceJ6KjpOBEdNZfC3xBnNCTOWq99EDErvHHiX/okr9aPD3fyV6D/rdBV0aroQTNQW/eghRuGXRUdpubyi+c2lWlN3n9ZKwrYd3OPfbQx05q8/7KAAgmY3/uKChZQCfnZYn0Kttem1y/0+71r1IJSze6QgN76h8DxK1DrLKUFlUG8nFUOcKMFlUiAvrcJqhxpaDbZ2MsCypbtUQDLMxtpaEr9fu8aLaBsXwnrCuB3cf5/CyhRARvdbUd6+HObFdTteG2BAl3IeGSXlVoLbu1faypK2+dsi0V22a4lu62daLByFhTI1EBafGHHvaZ1cc2AsrUkJAGNOqR2Hq2LoDImZkClX96fGedbfPDKYkyxGVBZzdRgUghPojOgsoI0IrbyaflxhhlQaOSzRJcEOMLkbklN4CwoVeX5BDrLJHS4j1lQHPN80lUBzjC5a/AXahrQ7hjgLOs+wkcLaHgQawgW6I0scxyM6LhWjRuhjb+aqqhYDmRqdxS+rt3SBK/NL85pQHnPSUi6JI6zDT+LIEs/0IBKSOB4t2Z1X6m7OqhMGoHIz7u/11RUZpZGwlbePWAPUAP6t4qRZ14SNzL89Hjl49PnpkYNKIIcAWVlmTuEaUGBogkBTENa28xJtoACi7GVtzB8q80Dqna25YIC3TL7Gb6rohlZ3VKzKrpl9jN8V0UzsurUdC2virrSt8PFVdEdFsUV0t1U9AcAAP//Wv4oeAAAAAZJREFUAwAtDwGEHKgtyAAAAABJRU5ErkJggg==", "library": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABACAYAAAC9S+EXAAAClUlEQVR4AeyaTU7EMAyFI07FBgmBuBMCsUIgJI7Ej1hyLPIWrWZSv8ZpnJb8oJo2HteJv+Y105m5cONPRWCAUmFyboAaoJQElGFjRg1QSgLKsFIz6sr3P5k/LL49+x5g135fZLMGBTi/fqTvJ4YCfLPIhtzo785nh735fZHNGhQAhQNFAaHPqi3lBjyr/HMea1Bz4gMPJHjZw6kd1Ec2AWWC2kGxMs3l919AYbWajBUv+Z8kp/eZy+9oUICDVQur1WTms8GDc87l/T8aFOCEFaTOBnafMgV+NKgQ0pb2LvJrAdQWuMnntAKquPy0oPBoMlny1djhBCY/s65joAAHqxIeTSYzvUmaVSInSl0Y5CzeGwMFOD7sbDPr/CxrfqOo/GKg8oe/X4ai8msJFLskJgpoDRSTH4Oo9rcG6otUnr0AtQbqh4DKll9roMCpiPyqAgUKGZYlvxZBsbcJWfJrEVTGpOOn1goKH/hNJlXHVr8XKVjjqw0U4ODZEx/4TSYV/0iKvyX+qLs2UIATFrW5+DDRWrs2UGu1hK8x+b2GgZp2y6CY/G40YMKYlkGFtWa1Wwf1Tegky691UA8EVLK7dVAMSPJ9qgdQTH4MoujvAdSnWLlzSfepnUGRIZd1sxmVJL8eQOEyMFh4TWW9gGIw1PLrBRR7m6CWXy+g2IxS+3sCxe5TKvn1BCpLfj2BUstMCuwN1Gb59QZqs/x6AyWpSuXrEZQkPzbTZogxUNLX0/fz2csDKX5tEKmDTo1fjtA5jAeGXLBLH4S93/EtBgrfuiLRqbEfQqAXKX5tEBjwaW4cW8ZjTJKhD/QNk15f+GKgFif06higlFd+gBqglASUYWNGDVBKAsqwMaMGKCUBZdiYUUpQfwAAAP//ODBKZgAAAAZJREFUAwC2KUeBnGBtMwAAAABJRU5ErkJggg==", "chev": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAABQCAYAAABMIbYpAAACDElEQVR4AezZTU7DMBCG4YhTsUWcCoklEpcCseVY+F1YikJ+nGa+mWk1qEPcYGI/M3Fx6dP04F8FvPcCVwWrgskzULdo8gIdTq8qeJii5B2qgskLdDi9quBhipJ3qApeLNB7+32iHWIeygoCe20sgnZr+j9UQEDAuog25/pzt+M54Pi0vla6hiBVwN8GfGuxfID8WZ5UPlcBmfMWkp+5IZVAIOFINTAc6QEMRXoBR5DPdLIOTyBz31uTn62DOdIb2AwTyBcaK2GOjAB2lwsyEghUjowGypEZgB35TWMRl9dkFiCuj/bNHJkJ2HyTOTIb0ByZEdiRa2+3Tq/JrECQbAguI5VAJqkKKjl07cxA9qVbkK0Nwj90VqAJDm1GoBkuI3ALxwZg+LYE1iNTBfdwbAD6nE8dswAlODKRASjDZQBKcdFAPqtY+zvHC8rNaw7UPKJuUXD8G38+F9pszcxwXDACuIdj/8m8zMIb6IojS55Ad5wnkE+Tttac+W0JrIdHBcH18eZHXlCkOAZTA0NxamA4Tgk8j2M2glDdoqyv5XQ5J19zy0FVQCCA+ni0Odefux1VQACAgPFGlTbn3EMJBBMGY3BCDWSM0ChgaPoNBq8KGiQx9BJVwdD0GwxeFTRIYuglqoKh6TcYvCpokMTQS9xrBYeTVsDhVCXtWBVMWpjhaVUFh1OVtOPDV/APAAD//6lmgccAAAAGSURBVAMAV7pNocx3hYUAAAAASUVORK5CYII=", "search": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAADNElEQVR4AeybgW3cMAxFja7TFdJNOkBX6ARdoQN0k3aF7lO9AgqcC79sSaQuNhiYkU2Rsv4TbZ9zyKctf0wCCcbEsm0JJsEIAsKdFZNgBAHhzopJMIKAcGfFfDAwn8t8sNJ8zG1FxXwr0n892PdyjO39gMJK1/O3SDAVyMtJmYDCgPV0QBFgEIW4s0AsbgACrNW3xOcNBjGI8pg8YAEMaI/xusbwBIMIxHRN4DB42wC9HI4XGKAcafxTArAfpf1ajBbDVw6bG3CaAd6dHmCOVhPhgPhZJo/9LS0bLYaPfiDhV3YGvsrt9s+CAUprNRGM8DMTAxLxgFTx3MNUn6t/FoyCgjhEjkwWkKp6XkYGHMmZAUO1qHMiTvWd8VM9wLVil1TNDBhVLWq1LZEtn4K7pGpGwahqYZVZ7Zbgnj4FObxqRsEocb9Vx6DfE3LXFLzBrBISfjmNgvnShX8umMtzboSB7FEw4Ss2oMU1ZRSMNYmolfW+b1lzf+cbBWNBiKqilZftK6BRMK8DLNixgFsL4zqVDjBvzvuU8n4zg+CDUTDqsez9wUt9kAxfmFEwar2sslexZ/zqteNM7lTMDBh1nXtVjaoWXhNUxU7B2CfPgGm95ClR+3O39sl/WrUwsRkw5KuqQRTiiOk18si38pZUCyeeBaOqhrERx58jEcrxGeMyJE/Fhl9C9cSzYBjn6C91CAUORrxlAAHi0c2bOCvf3ecBhklR4rTKgIMh3rIjIHVc4pbA8QJDiR/BqeJm2yVwvMAg9lZwPMFUONxzZquHfMbBGNey0MrxBlMFUD2IQmD1nWl5/JNHfo3nuO4/tmFwosBUAQhEGAYkDPHVOKavmnr801/HfGxD4ESD2YsAEob4ahzvY1r7h3Bayb19K8H0zs2KXwbnamCAtQTOFcEsgXNVMOFwrgwmFM7VwYTBuQOYM3Bab/bkv7O7gEFY62nV/d3UncC04HR/q3A3MBYcXj96PmEzxm3/J5LLqr6H8frxX2zPrztWTNXfXSU1kfbOYNA3bAlGoIsBI052JXeCEauVYBKMICDcWTEJRhAQ7qyYBCMICHdWTIIRBIQ7KybBCALC/Q8AAP//479OQgAAAAZJREFUAwAiEHCNHEkpwAAAAABJRU5ErkJggg==", "heart": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAA+CAYAAACSqr0VAAAEMklEQVR4AezYPZLUMBCG4am9EzEZJyIjJuNEZMRcCj1VqypJbtvyv4cy5UZSS+r++h3Z452P1/OvIvAAqXC8Xg+Qk4B8TXlKS8NDrzKX/upke52Qn0kB+5ta9iu1pfFl2yQ4xXWVucQtc+nzscW5tgKRUOJvSSVLzeyVBds7u7hYUEI4LNcWIAQqrtC8qGsvmD2brOuFEMWTi95orvKtBbJVYClCrLHTwm++XL+2D+hsrDVAZoMmxb8LS93Zyyeo+HKhMX/pi/plLv1oTembPClLgUwFI+ZLysx+pDabMfuefFOX4kGwRmusH9lYLjnncjkp4kdxF72HCCJYFEixxERz2fcndebEggC6Ni0PLzG25hJfPYMES06IIIMAyQGGYlO367JWUWOLx6DnUzG2L/LLRV80F9bTCySkmbJIJmnqLr5AUWTPRuvmTsVYHProHJuv/L1AIpqSSFYFXDhQpGKntpm3bmrN3Byd4rTr3J6VrwfI2OmoAm0YKDYSKyS/ef2tFsUZ3J4fG7KgvmF7tTUSuyeMKlkzqD7wnhMyoJgCul1Ss+vlmZIDHgVD3Jwjt1V9PUDyxjNaUIiOTswe+cWejHM3IMQeBUPsWesBUh2p2YhvvqAHSFTifwupB8jsfRcRu6kvep+q6usBEt3T73hCqq/X4gOrXh96gBR7q+7gLa+afdNBL5DqWH3W+k6nxOmIbpfB+1QvkOi2weVdTkkEg/6B9QKxceyU3B3KmD6no3p+KHIJkLFT4tYZSyrHlUYXfZGGAQyLlgCx3qu1tjVJJW/9V47poSvS4HRE/kU/IeYAY8EkJyKvu7Klg55IA/3h6bD44+X/ZSaYoNEuIjzRo7mzfKthELj0lrGHTUHxRL8KyiYYClsLxF5Qom8ec1dA2QyD8C1A7PfNcwcoTqTblabW3N4+vNYfjrcCEfRqKGA4kbS0tgiGzXsAEecqKLvCUMheQMQ6G8ruMBSxJxDxzoIyBcMzrfuZQXRpewMR+2goczDkp2OVHQGEEKJ8UvqteQAqqvX3jO2zP1orn7zRXLfvKCAEEEekfmuKUlzrnxpbb1+0Rh75orlFviOBEEIksfqtKU6RrT8aW2d9NCe+PNHcYt/RQAgilmj91hSp2NZfjs1bV/pyX1zx83hzewYQIokmXr81xSq69Rvzm9dvTTxxW/+m8VlAiJwSr2jFW5fNmD+Py/YQGBJ8vF6a02zsByYCFA+CvtZYv7XDYEh05gmRj81B8VfrJTCIuwKIvFNQxv5qPfRkEMWuAiL3FBTzrU09g9q1q8dXAiG6F0rvOjE32dVAiJ8rdm5ejN3sDkAUExXtmRH5rT/M7gJEgYr3CxfTP+WZIXFpdwJCl98xmP4ldjcgl0Aokz5AShqp/wBJEMrrAVLSSP0HSIJQXg+QkkbqA5Ka58oEHiCZxGf7DwAA//90aK05AAAABklEQVQDAMAps30W7wj9AAAAAElFTkSuQmCC", "status": "data:image/png;base64,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", "profile": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAD2UlEQVR4AeyZQa7UMAyGRxyJC7BD4jjsOAI7joPEjgtwJvpJ4yrN/I7TNkln5gWN1cRxHPuLGzWPT7f5TxKYYCSW222CeREwX5Y4TZbmdb+rK+bnkvq/RH4tbRPTXwLqKjAG5OsCIvqloCLbZuOjwbD7VEINEJUkc/GhxprqRoIhIXb/bAL4wNdZP8X5o8CQCAkVg1kG/9xleRR/+MJn0ejM4CgwJOLF+X0Z+HyXH8sTsT5ji0r+Sj7lhD3KEWA4aFVMVAcA/qrBu44xbLC9qzYPz/fG6EinNxjK3TtoqYzamLFVcDzftX5du95gvIWpAm/M0wNHjXWpmt5g1DlQOjdU4qlOze1SNb3BpElZm3PD2vFza3Fm7tZT0LsCTBDScwz3BMPBm2epDtDcJuq38BGt0fXPDr3KXp0pahPC5EsGPStGrauSUnZ7dc03YTSYvQlfZn8FmDPfHc1fGY98bzDqoOR1OpIgc1p/F3lcuh6+LOp9raoEsS+JN6f5+UIQvSuGNVTVoK/9oxOVgi1zclFfwrnNof4IMFSNB4cqIHFEJcB5hI0aQ9elWnA8AgzrAIenEhJHqIpcOI/UHHRHLqLMq5JRYAimZdm39EVsDzISDGXPLnuv1UNwQsFcfOBLDLdTjQRjUfNaHdlxoDDX/HR97gDTNA52nJ2PAAEDO2QYFDK9CgxrIwaIxJUMhUFAJleDsTie7jnBOFsywUwwDgFHPStmgnEIOOpnqBgukCZcGq2dPp3w+6lHgSFJkkbyiyIXSBMujdZOn+kcfOAP6UamJxgSsIRIkqSRs8ngA3+I+QcSctb3Or8lGEAgFiwJrAt1bgAJYW1iOA2pBRgCISBAIJ0ZhO6JwSABCAkn5QZnwKRAcr+1fS6JqXCpRFId7Vp/uR2AEDZuF6AjYFgEYWfyQLw+ySEknV4WuSSmwqUSSXW00zn4QPC3WS/o7AK0B4xVSLD+OkzglhDJISS9Ghxs4APBH/6BhNS6A1BYPbVgcFRTITmM2mDP2AEJ2QMphFMDBig4KgXPjhEYu1iy6z0GIIRYiKm0HjmRm7SpAYMDNTmtDoJRNlfqiCkC5OUW/k+kRxQoV1dHLXQDRMxqjswxqphvwhMLvAqUNHxiJvZUR1vlGFaMOnB/4+1FBTh56CrHEEzuhD6lyfOtJXqV3jr5UnITjENngmkIhnvSK4uDYqueFbPlsfYmmBXFthGBUR9EWw+q91o6eaeKwPBB9M5wyE1+l0Vg2HvgcBl7RyE3cnyQGjAPkz6CYoJxdnmCmWAcAo56VswE4xBw1LNiJhiHgKOeFeOA+Q8AAP//+O+0tgAAAAZJREFUAwByENGNYFirygAAAABJRU5ErkJggg==", "collections": "data:image/png;base64,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", "updoc": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABWCAYAAABoxACRAAADm0lEQVR4Aeybu4pUQRCGR03EF9An8AXEhxC8gKCJGCmIGogi+goiXjLFxMTQTBExMjJRTIxE0MhEFARBMFDw/2Fm6D7bPVU9092nzm4tVXu6qqu7qr7puSw7Z/fMf1QEHJQK02zmoByUkoAyzE+Ug1ISUIb5iXJQSgLKMD9RDkpJQBnmJ8pBKQkow/xENQC1D3seg96GPqqol7BXB9kshfZEnUGaF9Br0MPQgxX1FPa6CjUtGlCH0MF5aEs5js1Nw9KAuoMmeohpWBpQQ0jf4PhUQbHFFjELax1QF9HehQqKLZJiEpYEak+ylfZOc7AkUO2R5DOYgmUZFBGagWUdlBlYEqhdrNSAjn6yJFAGGC1LGBXWlECR2GiwJFBjfTwglJyOAksClSt2FH+QtDusqYIiM8I6wEEPnTIo8ulWf7dE7GqgJ2GX6F3EjyYSqJafo36i6xJ9g/jRRAIlzY9WeO/EDkJJ3EE5KCUBZZh0omq+mO9FTa+hvOIyLZFA1eqGcF7ON+OV9tycxkUCJc1ruiQUwgljadMf+kyPJRCbPvUIg1BSEOjnfGrOnE8CtUnBhEAYq/bgPONWxZiYawWKzRPCoMmkyTjGJyetOFuAYtNsvqRHxnNdyZqusbVBsVk2vU4TXMf166xtvkYCJc2HBbJJNhv6Ssdcz31K1zWPl0CUvOuxyVTB1+H8DA2F9s3QEYxz+wQh/YcSqJKKjiSCr8D3HvoPGgrtt3CkYJ2A35zUBPUH3YWw+GWOD/CtkiGs0wj+BTUnNUGxuQWsczA+QjWygHUWwd+hJqU2KDZJWF84KFDC+loQ3z1UAlXyYt69+J4JJVAW/wHak88ylwRqGbjTBw5KeQIcVCtQyn2HYZfh4GeshdKGazrS60T9BRJ+bFgobbimIxIof9ebP5YSqB/zuPDyEEbNm4a0ezEvUkfCmwMiRytDApV6iuxHMTVvGtLuxbxIHQn/uI4crQwJFPPe4y+DeqtnTRpQz1HQU6gleYJiXkG7iQYUi3mAX/wu031c30Fr3DRUugfz8nQfRf7H0K6iBcWi+F2mZxjcgNa4aah0D+bl6f6N/N2lBFT34iwldFDKR8NBOSglAWWYn6g8qGjGQUU48oaDyrOJZhxUhCNvOKg8m2jGQUU48oaDyrOJZhxUhCNvOKg8m2jGQUU48oaDyrOJZhxUhCNvOKg8m2jGQUU48sb2BpXvu3jGQSmROSgHpSSgDPsPAAD//2hoLloAAAAGSURBVAMAPRq6rRPf9NMAAAAASUVORK5CYII=", "mywords": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABECAYAAAAFgfLUAAAEdklEQVR4Aeya0arUMBCGq8+kN4IoIvo8oqio1yKi+DiiqCheCT6RIDrf8WQ3/qTtNsm0TbeS/7SZJJOZr9Nuz1mvdtv/d9NS/Cl6af1Z2tYBA/ddguS9hM3FtHXAQ9BmqeKtA9bq/RgRn6WKtwz4VgST0wf2470pbu5VvGXAb2OSdv79UnY4NPcq3ipgrd6HB6RdFz8mMOtcbNW0VcBavTGwZ3HHzu+b3NoWAacq8psQjKvY9TGxJcCARVq98eMhcNYq5hcR1gaFecXH1gDzqQ+MlACLFIpWr46HPmuDUv6z4LcCmORI+qTbORCzY6p6zXzR4sfEhWHkR4BPLCNTj8OtACa5Y9SnnQFwqHp5TDDnNG/HWZNiaQXwMb3jGXCCHpkZXbNjEACtO9iYw3zWxgp+BxefMtgqYGAAJ+irJYvskNVYGyv4DfCznLKoFcBUFPEGvbGT2ybvxh7slb1PK4CpKE2SxAGg9lp9fLOH+uPuUVtvvxXAJJBKDACAYLym8Ilv9ckjg0eJ2nv7pYB5L0W8QnkrlTCJYScGzmsIX/hUX8BV22g/FzBXGKC8l6LRjZwnEANgSrfBB75iPzz/s+DiJAcwcFNXGH9LCjAAyo2BvPARrwdu6vkfzxk8zwE86HDhQQU0JRwtGp75RXDZPAewBsJV5hZaSuxPLrU16cOsb/McwOrrIkE1ztgvqVr3MGsArnKlK2VacrFL1vaGXwNwr/MZBu7IHp+kP6Wra9X3FF+HuR6AX5n3WjJX1RoxAQ2lnH4RY5VHjwfguxZoLfXBsC0umkJQSEwCLO/sxPTaDGjMr03rmM+xSB6AiwKauHgIAhADWHULZMaYE4/pYyIeyzpvGbDCeRwRoGqBGJmSp8xhbnKwhtEDMInWUuqWH8ob6FTmUGXreuayhrVPZbAYvgdgoNSS5DvYpRqRTuK2R2rXPmsBrfaivgfgooAqL+ZO0qpkC4AzxvmQit+NWwbMXdIHB4D86j40hzHmnAK6b59Re8uASe4JP0TYUlUr0w5dQLPmYLg8edJ1HWOX3bxD64A/W9pUIYA4ImxmntRYw9pY2CY5SU1uHXDIqQqM4Kzm0QMwrzZLqyajIl8egHmvXFpFUGou9gBcM77mfU0FfCWRccqWmHaepqmAT6F03SYtLQthHc0D8B9LbWlZCOtoHoDXkdlKojgXwPo5oX23y+EBeOlXNPafDeDYlfEAXPZLRtfVWD+W92zjHoBnC76FjXbAzldpKuDUfLXxJ76lpTE5Y+x37xEIf8BeWr8lZf3Q075Mr9f1AFwvug14OhfAfGMcXy6+Uor7budTAeutR2A/7Af/w2at4ttiC/G/Ntsf6KcCJko+wDjG4n+Wr1VavcSdKhTs1ZUD+EX1KOZ1+HzO7XIA/7IAb5habMD9MGfgOYCJD8h8A0vACNtaxSONGCmKWeEC5B9gzvJEwAjYaxXv5MRIUeRlWbCqFHDB1uexdAfsfJ13wDtgZwLO7vcK3gE7E3B2v1fwDtiZgLP7vYKdAf8FAAD//+4/y9EAAAAGSURBVAMABZZ5mHgLhtcAAAAASUVORK5CYII="};
const COV = '/design/build/assets/covers/';
const g='#1F9D53', ink='#23241F', mut='#6C6C64', tabInk='#4B4F44';

const P = (typeof __P !== 'undefined' && __P) || null;

const UI_DEFAULT = {
  "appUi.library.profile": "Profile",
  "appUi.library.search": "Search",
  "appUi.library.upload": "Upload a book",
  "appUi.library.tabCatalog": "Catalog",
  "appUi.library.tabAll": "All books",
  "appUi.library.tabFavorites": "Favorites",
  "appUi.library.shelfBestsellers": "World bestsellers",
  "appUi.library.shelfBestsellersSub": "in short retellings, with audio",
  "appUi.library.shelfStories": "Short stories",
  "appUi.library.shelfStoriesSub": "Little stories with a big point",
  "appUi.library.bandTitle": "5 minutes a day",
  "appUi.library.bandText": "Discover interesting facts every day — and the language comes with no extra effort!",
  "appUi.library.shelfAmazing": "Amazing stories",
  "appUi.library.shelfNature": "Mysteries of nature",
  "appUi.library.shelfHealth": "Health and science",
  "appUi.library.moreTopics": "More topics",
  "appUi.library.shelfGolden": "Golden classics",
  "appUi.library.shelfGoldenSub": "200 books that changed humankind",
  "appUi.library.goldenBadge": "TOP-200",
  "appUi.nav.read": "Read",
  "appUi.nav.library": "Library",
  "appUi.nav.myWords": "My words",
  "appUi.nav.practice": "Practice",
  "appUi.nav.collections": "Collections"
};
const UI = Object.assign({}, UI_DEFAULT, (P && P.ui) || {});
const T = k => UI[k] || '';

const SHELF_DEFAULT = {
 "bestsellers": [
  {
   "src": "bs-babylon.png",
   "title": "The Richest Man in Babylon",
   "author": "George S. Clason"
  },
  {
   "src": "bs-monk.png",
   "title": "The Monk Who Sold His Ferrari",
   "author": "Robin Sharma"
  },
  {
   "src": "bs-sapiens.png",
   "title": "Sapiens: A Brief History of Humankind",
   "author": "Yuval Noah Harari"
  },
  {
   "src": "bs-mars.png",
   "title": "Men Are from Mars, Women Are from Venus",
   "author": "John Gray"
  }
 ],
 "stories": [
  {
   "src": "st1.png",
   "title": "The Adventure of the Speckled Band",
   "author": "Arthur Conan Doyle"
  },
  {
   "src": "st-usher.png",
   "title": "The Fall of the House of Usher",
   "author": "Edgar Allan Poe"
  },
  {
   "src": "st-pit.png",
   "title": "The Pit and the Pendulum",
   "author": "Edgar Allan Poe"
  },
  {
   "src": "st4.png",
   "title": "The Man with the Twisted Lip",
   "author": "Arthur Conan Doyle"
  }
 ],
 "amazing": [
  {
   "src": "am-new4.png",
   "title": "Why are Lincoln's and Kennedy's lives so alike?",
   "author": ""
  },
  {
   "src": "am-new3.png",
   "title": "Why did Van Gogh cut off his ear?",
   "author": ""
  },
  {
   "src": "am-new2.png",
   "title": "The Zodiac ciphers – cracked?",
   "author": ""
  },
  {
   "src": "am-new1.png",
   "title": "How did comics begin?",
   "author": ""
  }
 ],
 "nature": [
  {
   "src": "na-plastic.png",
   "title": "How plastic became part of us",
   "author": ""
  },
  {
   "src": "na2.png",
   "title": "Can you grow a burger in a lab?",
   "author": ""
  },
  {
   "src": "na3.png",
   "title": "Do plants have a primitive mind?",
   "author": ""
  },
  {
   "src": "na-dolphins.png",
   "title": "Can dolphins talk?",
   "author": ""
  }
 ],
 "health": [
  {
   "src": "hs-new4.png",
   "title": "Why do we age, and is it inevitable?",
   "author": ""
  },
  {
   "src": "hs-new3.png",
   "title": "Cryonics: a ticket to immortality?",
   "author": ""
  },
  {
   "src": "hs-new2.png",
   "title": "Can you manage pain without drugs?",
   "author": ""
  },
  {
   "src": "hs-new1.png",
   "title": "A cancer vaccine: the future or already here?",
   "author": ""
  }
 ],
 "golden": [
  {
   "src": "gc-romeo.png",
   "title": "Romeo and Juliet",
   "author": "William Shakespeare"
  },
  {
   "src": "gc-musketeers.png",
   "title": "The Three Musketeers",
   "author": "Alexandre Dumas"
  },
  {
   "src": "gc-laughs.png",
   "title": "The Man Who Laughs",
   "author": "Victor Hugo"
  },
  {
   "src": "gc-jane.png",
   "title": "Jane Eyre",
   "author": "Charlotte Brontë"
  }
 ]
};

function shelf(key){
  const meta = (P && P.catalog && P.catalog.shelves || []).find(x => x.key === key);
  if (!meta) return { items: SHELF_DEFAULT[key] || [] };
  const txt = (P.catText || {});
  const books = (P.catalog.books || {});
  return { items: meta.books.map(function (bs) {
    const id = bs[0], b = books[id] || {};
    const t = (txt.b || {})[id] || [];
    return { src: bs[1], title: t[0] || '',
             author: (b.author != null ? (txt.a || {})[b.author] : '') || '' };
  }) };
}
const bestsellers = shelf('bestsellers').items;
const stories     = shelf('stories').items;
const amazing     = shelf('amazing').items;
const nature      = shelf('nature').items;
const health      = shelf('health').items;
const golden      = shelf('golden').items;

const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;');
function mask(name,w,h,color,extra){
  return `<span style="display:inline-block;width:${w}px;height:${h}px;background:${color};-webkit-mask:url(${ICONS[name]}) center/contain no-repeat;mask:url(${ICONS[name]}) center/contain no-repeat${extra?';'+extra:''}"></span>`;
}
function card(bk,h,withAuthor){
  const author=(withAuthor&&bk.author)?`<div style="font-size:10.5px;letter-spacing:-0.1px;line-height:1.3;color:#8B8B80;margin-top:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(bk.author)}</div>`:'';
  return `<div style="width:98px;flex:none;display:flex;flex-direction:column">
    <div style="width:98px;height:${h}px;flex:none"><img src="${COV}${bk.src}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:8px;border:1px solid rgba(0,0,0,0.09)"></div>
    <div style="font-size:12px;line-height:1.32;color:#2E2F2A;margin-top:8px;letter-spacing:-0.1px;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden">${esc(bk.title)}</div>
    ${author}
  </div>`;
}
function row(list,h,withAuthor,pad){
  return `<div class="row" style="display:flex;gap:8px;overflow-x:auto;${pad};flex:none">${list.map(b=>card(b,h,withAuthor)).join('')}</div>`;
}
function chevBtn(bordered){
  return `<div style="width:30px;height:30px;border-radius:11px;background:#FCFBF6;${bordered?'border:1px solid #E5E3D9;':''}display:flex;align-items:center;justify-content:center;cursor:pointer;flex:none;margin-top:2px">${mask('chev',12,17,'#3F3F38')}</div>`;
}
function chevBanner(){
  return `<div style="width:30px;height:30px;border-radius:11px;background:#FCFBF6;display:flex;align-items:center;justify-content:center;cursor:pointer;flex:none">${mask('chev',12,17,'#3F3F38')}</div>`;
}
function head(title,sub,bolt){
  const b=bolt?mask('bolt',17,21,'#E8A33D'):'';
  return `<div style="display:flex;align-items:flex-start;justify-content:space-between;padding:15px 19px 0;flex:none">
    <div>
      <div style="display:flex;align-items:center;gap:8px"><span style="font-size:23px;font-weight:700;color:#33342E;letter-spacing:-0.4px">${title}</span>${b}</div>
      ${sub?`<div style="font-size:14px;color:#5F5F55;margin-top:4px">${sub}</div>`:''}
    </div>${chevBtn(true)}</div>`;
}
function bannerHead(title,mt){
  return `<div style="display:flex;align-items:flex-start;justify-content:space-between;margin-top:${mt}px">
    <div style="font-size:23px;font-weight:700;color:#33342E;letter-spacing:-0.4px">${title}</div>${chevBanner()}</div>`;
}

let html='';
html+=`<div style="padding:12px 26px 0 18px;display:flex;justify-content:space-between;align-items:flex-start;flex:none">
  <div style="font-size:17px;font-weight:700;color:#17181A;letter-spacing:-0.3px;margin-left:24px;padding-top:3px">21:00</div>
  <div style="margin-top:6px"><img src="${ICONS.status}" alt="" style="height:13.5px;width:auto;display:block"></div>
</div>`;

let s='';
html+=`<div style="display:flex;gap:9px;padding:18px 16px 0;flex:none">
  <div style="background:#FCFBF6;border:1px solid #E5E3D9;border-radius:17px;min-width:55px;min-height:54px;padding:0 11px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;cursor:pointer;flex:none">
    ${mask('profile',23,23,'#6E6A5C')}<span style="font-size:12px;color:#3F3F38">${T('appUi.library.profile')}</span>
  </div>
  <div style="background:#FCFBF6;border:1px solid #E5E3D9;border-radius:17px;min-width:55px;min-height:54px;padding:0 11px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;cursor:pointer;flex:none">
    ${mask('search',23,23,'#6E6A5C')}<span style="font-size:12px;color:#3F3F38">${T('appUi.library.search')}</span>
  </div>
  <div style="flex:1;background:#DDEAD9;border:1.5px solid #A3CDA8;border-radius:16px;min-height:54px;display:flex;align-items:center;gap:10px;padding:0 14px 0 18px;cursor:pointer">
    ${mask('updoc',23,27,'#1F9D53','flex:none')}
    <span style="flex:1;min-width:0;font-size:17.5px;font-weight:700;color:#1F9D53;line-height:1.1;max-width:130px">${T('appUi.library.upload')}</span>
    ${mask('chev',17,25,'#1F9D53','flex:none;margin-left:auto')}
  </div>
</div>`;
html+=`<div data-el="tabs" style="display:flex;align-items:flex-start;gap:20px;padding:12px 19px 8px;flex:none;overflow-x:auto"></div>`;
s+=head(T('appUi.library.shelfBestsellers'),T('appUi.library.shelfBestsellersSub'),true);
s+=row(bestsellers,106,true,'padding:16px 19px 0');
s+=head(T('appUi.library.shelfStories'),T('appUi.library.shelfStoriesSub'),false);
s+=row(stories,106,true,'padding:16px 19px 0');
s+=`<div data-el="band-sec" style="margin:9px 0 0;background:#E3EEE0;border-top:1px solid #C9DFC9;padding:16px 19px 26px;flex:none">
  <div style="display:flex;align-items:flex-start;justify-content:space-between">
    <div style="font-size:23px;font-weight:700;color:#33342E;letter-spacing:-0.4px">${T('appUi.library.bandTitle')}</div>${chevBanner()}
  </div>
  <div style="font-size:13.5px;line-height:1.45;color:#4A4B43;margin-top:9px">${T('appUi.library.bandText')}</div>
  ${bannerHead(T('appUi.library.shelfAmazing'),40)}
  ${row(amazing,106,false,'margin:16px -19px 0;padding:0 19px')}
  ${bannerHead(T('appUi.library.shelfNature'),34)}
  ${row(nature,106,false,'margin:16px -19px 0;padding:0 19px 10px')}
  ${bannerHead(T('appUi.library.shelfHealth'),34)}
  ${row(health,106,false,'margin:16px -19px 0;padding:0 19px')}
  <div style="display:flex;justify-content:center;margin-top:26px">
    <div style="display:flex;align-items:center;gap:8px;background:#FCFBF6;border-radius:22px;padding:10px 24px;cursor:pointer;box-shadow:0 1px 2px rgba(0,0,0,0.04)">
      <span style="font-size:16px;color:#55584E">${T('appUi.library.moreTopics')}</span>${mask('chev',12,17,'#55584E','flex:none;transform:rotate(90deg)')}
    </div>
  </div>
</div>`;
s+=`<div data-el="golden-sec" style="padding:20px 19px 0;flex:none">
  <div style="display:flex;align-items:flex-start;justify-content:space-between">
    <div>
      <div style="display:flex;align-items:flex-start;gap:6px">
        <span style="font-size:23px;font-weight:700;color:#33342E;letter-spacing:-0.4px">${T('appUi.library.shelfGolden')}</span>
        <span style="display:flex;align-items:center;gap:1px;font-size:13px;font-weight:800;color:#E8A33D;margin-top:2px;white-space:nowrap"><svg width="15" height="12" viewBox="0 0 24 19" fill="#EFA10B"><path d="M2 14 L1 4 L7 8.5 L12 1 L17 8.5 L23 4 L22 14 Z"></path><rect x="2" y="16" width="20" height="3" rx="1"></rect></svg>${T('appUi.library.goldenBadge')}</span>
      </div>
      <div style="font-size:14px;color:#5F5F55;margin-top:4px">${T('appUi.library.shelfGoldenSub')}</div>
    </div>${chevBtn(true)}</div></div>`;
s+=row(golden,106,true,'padding:16px 19px 60px');

html+=`<div class="lib-scroll" style="flex:1;overflow-y:auto;display:flex;flex-direction:column">${s}</div>`;
html+=`<div data-el="nav" style="flex:none;background:#F3F1E9;border-top:1px solid rgba(0,0,0,0.06);display:flex;align-items:flex-end;padding:8px 4px 38px;position:relative;z-index:2"></div>`;
html+=`<div data-el="read-cover" style="position:absolute;left:50%;transform:translateX(-50%);bottom:62px;width:72px;height:66px;background:#FFFFFF;border-radius:16px;box-shadow:0 4px 18px rgba(0,0,0,0.14);padding:5px;z-index:3"><img src="${COV}player.png" alt="" style="width:100%;height:100%;object-fit:contain;border-radius:11px"></div>`;

__R.querySelector('[data-el="frame"]').innerHTML=html;

const catalogSvg=(w,h)=>`<svg width="${w}" height="${h}" viewBox="0 0 16 16" fill="currentColor" style="display:inline-block;flex:none"><rect x="1.5" y="1.5" width="3" height="3" rx="1"/><rect x="6.5" y="1.5" width="3" height="3" rx="1"/><rect x="11.5" y="1.5" width="3" height="3" rx="1"/><rect x="1.5" y="6.5" width="3" height="3" rx="1"/><rect x="6.5" y="6.5" width="3" height="3" rx="1"/><rect x="11.5" y="6.5" width="3" height="3" rx="1"/><rect x="1.5" y="11.5" width="3" height="3" rx="1"/><rect x="6.5" y="11.5" width="3" height="3" rx="1"/><rect x="11.5" y="11.5" width="3" height="3" rx="1"/></svg>`;
const TABS=[['catalog',T('appUi.library.tabCatalog'),'catalog',17,17],['all',T('appUi.library.tabAll'),'allbooks',20,20],['fav',T('appUi.library.tabFavorites'),'heart',20,18]];
let topTab='catalog';
function renderTabs(){
  __R.querySelector('[data-el="tabs"]').innerHTML=TABS.map(([k,label,icon,w,h])=>{
    const on=topTab===k;
    return `<div data-tab="${k}" style="cursor:pointer;display:flex;flex-direction:column;color:${on?ink:mut}">
      <div style="display:flex;align-items:center;gap:5px;white-space:nowrap;font-weight:${on?700:400};font-size:16px">${icon==='catalog'?catalogSvg(w,h):mask(icon,w,h,'currentColor')}<span>${label}</span></div>
      <div style="height:6.5px;border-radius:4px;background:${on?g:'transparent'};margin-top:10px"></div>
    </div>`;
  }).join('');
  __R.querySelectorAll('[data-el="tabs"] [data-tab]').forEach(el=>el.onclick=()=>{topTab=el.dataset.tab;renderTabs();});
}
renderTabs();

const NAV=[['library',T('appUi.nav.library'),'library',25,21],['practice',T('appUi.nav.practice'),'practice',27,23],['read',T('appUi.nav.read'),'__svg',0,0],['words',T('appUi.nav.myWords'),'mywords',29,23],['collections',T('appUi.nav.collections'),'collections',44,23]];
let bottomTab='library';
const readSvg='<svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6c-1.6-1.6-4-2.2-8-2.2v14c4 0 6.4.6 8 2.2 1.6-1.6 4-2.2 8-2.2v-14c-4 0-6.4.6-8 2.2z"></path><path d="M12 6v14"></path></svg>';
function renderNav(){
  __R.querySelector('[data-el="nav"]').innerHTML=NAV.map(([k,label,icon,w,h])=>{
    const on=bottomTab===k;
    const glyph=icon==='__svg'?readSvg:mask(icon,w,h,'currentColor');
    return `<div data-nav="${k}" style="flex:1;min-width:0;display:flex;flex-direction:column;align-items:center;gap:5px;cursor:pointer;color:${on?g:tabInk}">${glyph}<span style="font-size:11px;font-weight:500;text-align:center;line-height:1.05;overflow-wrap:anywhere;max-width:100%">${label}</span><div style="width:50px;height:2.5px;border-radius:2px;background:${on?g:'transparent'}"></div></div>`;
  }).join('');
  __R.querySelectorAll('[data-el="nav"] [data-nav]').forEach(el=>el.onclick=()=>{bottomTab=el.dataset.nav;renderNav();});
}
renderNav();

const MOUNT_ID = (typeof __R !== 'undefined' && __R && __R.id) || '';
const IFRAME = window.self !== window.top;
const EMBED = IFRAME || /[?&]demo\b/.test(location.search);
if (EMBED) {
  if (IFRAME) {
    document.body.style.cssText = 'margin:0;padding:0;background:transparent;min-height:0;display:block';
  }
  var f = __R.querySelector('[data-el="frame"]');
  if (f) { f.style.borderRadius = '0'; f.style.boxShadow = 'none'; }
  (function(){
    var frame = __R.querySelector('[data-el="frame"]');
    var scroll = __R.querySelector('.lib-scroll');
    var cover = __R.querySelector('[data-el="read-cover"]');
    var golden = __R.querySelector('[data-el="golden-sec"]');
    var finger = document.createElement('div');
    finger.style.cssText = 'position:absolute;z-index:60;width:44px;height:44px;pointer-events:none;opacity:0;transition:opacity .18s, top .38s ease, left .38s ease;filter:drop-shadow(0 3px 5px rgba(0,0,0,.28))';
    finger.innerHTML = '<svg width="44" height="44" viewBox="0 0 48 48" fill="none"><path d="M19 5c-1.7 0-3 1.3-3 3v17.5l-3.4-3.6a3.1 3.1 0 0 0-4.5 4.3l8.7 10.4c1.4 1.7 3.4 2.6 5.6 2.6h8.1a6 6 0 0 0 6-5.2l1.3-9.7a3.2 3.2 0 0 0-3.2-3.6H22V8c0-1.7-1.3-3-3-3z" fill="#fff" stroke="#2b2b2b" stroke-width="2" stroke-linejoin="round"/></svg>';
    frame.appendChild(finger);
    var sleep = function(ms){ return new Promise(function(r){ setTimeout(r, ms); }); };
    function scaleOf(){ return (frame.offsetWidth ? frame.getBoundingClientRect().width / frame.offsetWidth : 1) || 1; }
    function fingerTo(el){
      var sc = scaleOf(), rr = frame.getBoundingClientRect(), r = el.getBoundingClientRect();
      finger.style.left = ((r.left - rr.left + r.width / 2) / sc - 6) + 'px';
      finger.style.top  = ((r.top  - rr.top  + r.height / 2) / sc - 2) + 'px';
      finger.style.opacity = '1';
    }
    function tap(){ finger.animate([{transform:'scale(1)'},{transform:'scale(.78)'},{transform:'scale(1)'}],{duration:280}); return sleep(280); }
    var LOOP = /[?&]loop\b/.test(location.search);   // карточка «цикл»: самозацикливание; hero (без loop): один проход + ждём restart
    async function run(){
      do {
        if (scroll) scroll.scrollTo({ top: 0, behavior:'auto' });   // старт сверху каталога
        await sleep(LOOP ? 1200 : 1500);
        if (scroll) {
          var band = __R.querySelector('[data-el="band-sec"]');
          var to = band ? Math.max(0, band.offsetTop - scroll.offsetTop)
                        : Math.max(0, scroll.scrollHeight - scroll.clientHeight - 49);
          scroll.scrollTo({ top: to, behavior:'smooth' });
        }
        await sleep(1800);
        if (cover){ fingerTo(cover); await sleep(560); await tap(); finger.style.opacity='0'; }
        await sleep(300);
        try { window.parent.postMessage({ type:'l7demo-openBook', from: MOUNT_ID }, '*'); } catch(e){}
        await sleep(2200);
      } while (LOOP);
    }
    run();
    window.addEventListener('message', function(e){ if (e && e.data && e.data.type === 'l7demo-restart') run(); });
  })();
}

};
