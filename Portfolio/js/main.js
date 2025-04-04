$(document).ready(function () {
    const iconWrapper = $("#header .icon_wrapper");
    const contactItem = $("#header .contact_item");

    // GSAP 초기 설정 (contact_item 뒤에 숨김)
    gsap.set(iconWrapper, {
        rotation: -114,
        skewX: -2,
        x: 0
    });

    // 마우스 hover 시 아이콘이 회전하면서 등장
    contactItem.hover(
        function () {
            gsap.to(iconWrapper, {
                rotation: 80,
                skewX: 0,
                scale: 1,
                x: 80,
                duration: 0.5,
                ease: "power2.out",
                onComplete: function () {
                    gsap.to(iconWrapper, {
                        rotation: 0,
                        x: 47,
                        duration: 0.4,
                        ease: "power1.out"
                    });
                }
            });
        },
        function () {
            gsap.to(iconWrapper, {
                rotation: -114,
                skewX: -0.2,
                scale: 0.98,
                x: 0,
                duration: 0.5,
                ease: "power2.in"
            });
        }
    );

    let textElements = $(".vis_img");

    $(document).on("mousemove", function (e) {
        let xPos = (e.clientX - window.innerWidth / 2) / 40;
        let yPos = (e.clientY - window.innerHeight / 2) / 40;

        gsap.to(textElements, {
            x: xPos,
            y: yPos,
            duration: 0.5,
            ease: "power2.out"
        });
    });
});

