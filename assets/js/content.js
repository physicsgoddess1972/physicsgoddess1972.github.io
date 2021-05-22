$(function(){
    $.getJSON("util/content.json", function(data){
        $('#name').html(data.name)
        $('#profile-picture').attr({src: data.profile})
        $('#biography').html(data.biography)
        var i = 0
        Object.values(data.projects).forEach(val => {
            var tree = document.createDocumentFragment();
            var pcard = document.createElement('div')
            var ptitle = document.createElement('h6')
            var pdesc = document.createElement('p')

            pcard.setAttribute('style', "border-left: 1px solid #151515; padding: 10px; box-shadow: 3px 5px #151515;background-color: #252525")
            ptitle.setAttribute('id', String('proj-title' + i))
            pdesc.setAttribute('id', String('proj-description' + i))

            tree.appendChild(pcard)
            pcard.appendChild(ptitle)
            pcard.appendChild(pdesc)
            tree.appendChild(document.createElement('br'))

            document.getElementById('project').appendChild(tree)
            $("#proj-title" + i).html(Object.values(data.projects)[i].title)
            $("#proj-description" + i).html(Object.values(data.projects)[i].description)
            i++
        })
        var i = 0
        Object.values(data.workhistory.current).forEach(val => {
            var tree = document.createDocumentFragment();
            var cwcard = document.createElement('div')
            var cwrole = document.createElement('h5')
            var cwdesc = document.createElement('p')
            var cwplace = document.createElement('b')

            cwcard.setAttribute('style', "border-left: 1px solid #151515; padding: 10px; box-shadow: 3px 5px #151515;background-color: #252525")
            cwrole.setAttribute('id', String('current-role' + i))
            cwdesc.setAttribute('id', String('current-description' + i))
            cwplace.setAttribute('id', String('current-place' + i))

            tree.appendChild(cwcard)
            cwcard.appendChild(cwrole)
            cwcard.appendChild(cwdesc)
            cwcard.appendChild(cwplace)
            tree.appendChild(document.createElement('br'))

            console.log(Object.values(data.workhistory.current)[i].title)

            document.getElementById('current').appendChild(tree)
            $("#current-role" + i).html(Object.values(data.workhistory.current)[i].title)
            $("#current-description" + i).html(Object.values(data.workhistory.current)[i].description)
            $("#current-place" + i).html(Object.values(data.workhistory.current)[i].place + ". " + Object.values(data.workhistory.current)[i].city + ", " + Object.values(data.workhistory.current)[i].state)
            i++
        })
        var i = 0
        Object.values(data.workhistory.previous).forEach(val => {
            var tree = document.createDocumentFragment();
            var pwcard = document.createElement('div')
            var pwrole = document.createElement('h5')
            var pwdesc = document.createElement('p')
            var pwplace = document.createElement('b')

            pwcard.setAttribute('style', "border-left: 1px solid #151515; padding: 10px; box-shadow: 3px 5px #151515;background-color: #252525")
            pwrole.setAttribute('id', String('previous-role' + i))
            pwdesc.setAttribute('id', String('previous-description' + i))
            pwplace.setAttribute('id', String('previous-place' + i))

            tree.appendChild(pwcard)
            pwcard.appendChild(pwrole)
            pwcard.appendChild(pwplace)
            pwcard.appendChild(pwdesc)
            tree.appendChild(document.createElement('br'))

            document.getElementById('previous').appendChild(tree)
            $("#previous-role" + i).html(Object.values(data.workhistory.previous)[i].title)
            $("#previous-description" + i).html(Object.values(data.workhistory.previous)[i].description)
            $("#previous-place" + i).html(Object.values(data.workhistory.previous)[i].place + ". " + Object.values(data.workhistory.previous)[i].city + ", " + Object.values(data.workhistory.previous)[i].state)
            i++
        })
        var i = 0
        Object.values(data.conferences).forEach(val => {
            var tree = document.createDocumentFragment();
            var concard = document.createElement('div')
            var contitle = document.createElement('h6')
            var conabstr = document.createElement('p')
            var conposter = document.createElement('img')

            concard.setAttribute('style', "border-left: 1px solid #151515; padding: 10px; box-shadow: 3px 5px #151515;background-color: #252525")
            contitle.setAttribute('id', String('conference-title' + i))
            conabstr.setAttribute('id', String('conference-abstract' + i))
            conposter.setAttribute('id', String('conference-poster' + i))

            tree.appendChild(concard)
            concard.appendChild(contitle)
            concard.appendChild(conabstr)
            concard.appendChild(document.createElement('br'))
            concard.appendChild(conposter)
            tree.appendChild(document.createElement('br'))

            document.getElementById('presentations').appendChild(tree)
            $("#conference-title" + i).html(Object.values(data.conferences)[i].title)
            $("#conference-abstract" + i).html(Object.values(data.conferences)[i].abstract)
            $("#conference-poster" + i).attr({src: Object.values(data.conferences)[i].poster})
            i++
        })
        var i = 0
        Object.values(data.education).forEach(val => {
            var tree = document.createDocumentFragment();
            var ecard = document.createElement('div')
            var edeg = document.createElement('h6')
            var eyear = document.createElement('b')
            var eplace = document.createElement('b')

            ecard.setAttribute('style', "border-left: 1px solid #151515; padding: 10px; box-shadow: 3px 5px #151515;background-color: #252525")
            edeg.setAttribute('id', String('edu-degree' + i))
            eyear.setAttribute('id', String('edu-year' + i))
            eplace.setAttribute('id', String('edu-place' + i))

            tree.appendChild(ecard)
            ecard.appendChild(edeg)
            ecard.appendChild(eplace)
            ecard.appendChild(document.createElement('br'))
            ecard.appendChild(eyear)
            tree.appendChild(document.createElement('br'))

            document.getElementById('education').appendChild(tree)
            $("#edu-degree" + i).html(Object.values(data.education)[i].degree)
            $("#edu-year" + i).html(Object.values(data.education)[i].year)
            $("#edu-place" + i).html(Object.values(data.education)[i].place)
            i++
        })
    })
})