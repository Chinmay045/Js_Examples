let b = document.links;
            let a = "javscript";
            let c = Array.from(b);
            c.forEach(function(element) {
                if (element.href.includes(a)) {
                    console.log(element);
                }
            })

            