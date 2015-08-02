var MyDate = function (d) {
  var date = new Date(d)

  this.humanize = function () {
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    return date.getFullYear() + ' ' + months[date.getMonth()] + ' ' + date.getDay()
  }

  this.toISOString = function () {
    return date.toISOString()
  }
}

var stateSymbol = {
  'exclamation': 'fa-exclamation-circle fa-red',
  'check': 'fa-check fa-green'
}

var content = '<p>Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.</p><p>Cum horribilem resurgere de sepulcris creaturis, sicut de iride et serpens. Pestilentia, ipsa screams. Pestilentia est haec ambulabat mortuos. Sicut malus voodoo. Aenean a dolor vulnerum aperire accedunt, mortui iam vivam. Qui tardius moveri, sed in magna copia sint terribiles legionis. Alii missing oculis aliorum sicut serpere crabs nostram. Putridi odores aere implent.</p><p>Tremor est vivos magna. Expansis ulnis video missing carnem armis caeruleum in locis. A morbo amarus in auras. Nihil horum sagittis tincidunt, gelida portenta. The unleashed virus est, et iam mortui ambulabunt super terram. Souless mortuum oculos attonitos back zombies. An hoc incipere Clairvius Narcisse, an ante? Is bello mundi z?</p><p>In omni memoria patriae religionis sunt diri undead historiarum. Golums, zombies et fascinati. Maleficia! Vel a modern perhsaps morbi. A terrenti contagium. Forsitan illud Apocalypsi, vel malum poenae horrifying fecimus. Indeflexus monstra per plateas currere. Fit de nostra carne undead. Poenitentiam agite pœnitentiam! Vivens mortua sunt apud nos.</p><p>Ut fames cerebro enim carnis, viscera et organa viventium. Sicut spargit virus ad impetum, qui supersumus. Avium, canum, fugere ferae et infecti horrenda monstra. Videmus deformis horrenda daemonum. Panduntur portae inferi. Finis accedens sentio terrore perterritus et taedium. The horror, monstra significant finem. Terror sit unum superesse sentit, ut caro eaters caule nobis.</p><p>Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis. Summus thalamus brains sit​​, morbo basal ganglia vel maleficia? De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris. Hi brains mindless mortuis limbic cortex soulless creaturas optic nerve, imo evil braaiinns stalking monstra hypothalamus adventus resi hippocampus dentevil vultus brain comedat cerebella pitiutary gland viventium. Qui optic gland animated corpse, brains cricket bat substantia nigra max brucks spinal cord terribilem incessu brains zomby. The medulla voodoo sacerdos locus coeruleus flesh eater, lateral geniculate nucleus suscitat mortuos braaaains comedere carnem superior colliculus virus. Zonbi cerebellum tattered for brein solum oculi cerveau eorum defunctis cerebro go lum cerebro. Nescio brains an Undead cervello zombies. Sicut thalamus malus putrid brains voodoo horror. Nigh basal ganglia tofth eliv ingdead.</p><p>Cum prefrontal cortex horribilem walking fornix dead resurgere brains de crazed limbic cortex optic nerve sepulcris creaturis, braaaaaiins zombie sicut hypothalamus de grave hippocampus feeding iride brainz et serpens. Pestilentia, pitiutary gland shaun ofthe optic gland dead scythe brains animated corpses spinal cord ipsa screams medulla. Pestilentia braynz est plague locus coeruleus haec decaying lateral geniculate nucleus ambulabat mortuos. Sicut breins zeder apathetic superior colliculus malus voodoo. Brains aenean a cerebellum dolor plan cerveau et terror braaaaaaiiiinssss soulless vulnerum cerebro contagium accedunt, cervello mortui iam thalamus vivam unlife. Qui berrains tardius moveri, basal ganglia brid eof prefrontal cortex reanimator sed fornix in magna brains copia sint limbic cortex terribiles undeath optic nerve legionis. Alii hypothalamus missing oculis brayns aliorum sicut hippocampus serpere crabs pitiutary gland nostram. Braynz putridi braindead optic gland odores kill substantia nigra and infect brains, aere implent spinal cord left four dead.</p><p>Medulla lucio brains fulci tremor locus coeruleus est dark vivos lateral geniculate nucleus magna. Breins expansis creepy superior colliculus arm yof cerebellum darkness ulnis brains witchcraft missing cerveau carnem armis cerebro Kirkman Moore braaiiiinnns and Adlard cervello caeruleum in thalamus locis. Romero basal ganglia morbo brains Congress amarus prefrontal cortex in auras fornix. Nihil horum braaiins sagittis tincidunt, limbic cortex zombie slack-jawed optic nerve gelida survival breins portenta. The hypothalamus unleashed virus hippocampus est, et pitiutary gland iam zombie braynz mortui ambulabunt optic gland super terram substantia nigra. Souless mortuum braynz glassy-eyed oculos spinal cord attonitos indifferent medulla back zom brains bieapoc alypse locus coeruleus. An hoc lateral geniculate nucleus dead snow braaaiiiins sociopathic inciperesuperior colliculus Clairvius Narcisse cerebellum, an ante cerveau? Is bello brains mundi z?</p><p>In Craven cerebro omni memoria cervello patriae zombieland breins clairvius narcisse thalamus religionis sunt sweet bread diri undead basal ganglia historiarum. Golums, brain zombies unrelenting et prefrontal cortex Raimi fascinati fornix beheading. Maleficia! Vel limbic cortex cemetery man braaiiins a modern optic nerve bursting eyeballs hypothalamus perhsaps morbi hippocampus. A terrenti Brains flesh contagium pitiutary gland. Forsitan deadgurl optic gland illud corpse braynz Apocalypsi, vel substantia nigra staggering malum spinal cord zomby poenae brains chainsaw zombi medulla horrifying fecimus locus coeruleus burial ground lateral geniculate nucleus. Indeflexus shotgun braaaiiinnnns coup de superior colliculus poudre monstra cerebellum per plateas cerveau currere. Fit brains de decay cerebro nostra carne cervello undead. Poenitentiam thalamus violent zom basal ganglia biehig hway braaiiinns agite RE:dead prefrontal cortex pœnitentiam! Vivens fornix mortua sunt brains apud nos limbic cortex night of optic nerve the living brain dead.</p><p>Whyt zomby brains Ut fames hypothalamus after death hippocampus cerebro virus pitiutary gland enim carnis optic gland grusome, viscera substantia nigra et organa braaiiins viventium. Sicut spinal cord spargit virus medulla ad impetum, brayns qui supersumus locus coeruleus flesh eating. Lateral geniculate nucleus avium, brains guts, superior colliculus ghouls, unholy brain canum, fugere cerebellum ferae et brein infecti horrenda braiinnns monstra. Videmus twenty-eight cerveau deformis pale, cerebro horrenda daemonum brains. Panduntur brains cervello portae rotting thalamus inferi. Finis braaaiiins accedens walking basal ganglia deadsentio terrore prefrontal cortex perterritus et brains twen fornix tee ate limbic cortex daze leighter brains taedium wal optic nerve kingdead. The hypothalamus horror, monstra hippocampus epidemic significant braaaaiiins finem. Terror pitiutary gland brains sit optic gland unum viral substantia nigra superesse undead braynz medulla sentit, ut caro breins eaters maggots, locus coeruleus caule nobis. Brains</p>'

var data = {
  'reports': [
    {
      'id': '1',
      'title': 'Security Threat #924',
      'date': new MyDate('2015/08/22'),
      'symbol': stateSymbol.check,
      'tags': [
        {
          'tag': 'bug',
          'link': '#'
        },
        {
          'tag': 'important',
          'link': '#'
        }
      ],
      'team': [
        {
          'name': 'Dan',
          'job': 'Team coordination'
        }
      ],
      'content': content
    },
    {
      'id': '2',
      'title': 'Bug #234',
      'date': new MyDate('2015/08/22'),
      'symbol': stateSymbol.check,
      'tags': [
        {
          'tag': 'bug',
          'link': '#'
        },
        {
          'tag': 'important',
          'link': '#'
        }
      ],
      'team': [
        {
          'name': 'Dan',
          'job': 'Team coordination'
        }
      ],
      'content': content
    },
    {
      'id': '3',
      'title': 'Security Threat #903',
      'date': new MyDate('2015/08/22'),
      'symbol': stateSymbol.check,
      'tags': [
        {
          'tag': 'bug',
          'link': '#'
        },
        {
          'tag': 'important',
          'link': '#'
        }
      ],
      'team': [
        {
          'name': 'Dan',
          'job': 'Team coordination'
        }
      ],
      'content': content
    },
    {
      'id': '4',
      'title': 'Security Breach',
      'date': new MyDate('2015/08/22'),
      'symbol': stateSymbol.check,
      'tags': [
        {
          'tag': 'bug',
          'link': '#'
        },
        {
          'tag': 'important',
          'link': '#'
        }
      ],
      'team': [
        {
          'name': 'Dan',
          'job': 'Team coordination'
        }
      ],
      'content': content
    },
    {
      'id': '5',
      'title': 'Security Threat #903',
      'date': new MyDate('2015/08/22'),
      'symbol': stateSymbol.check,
      'tags': [
        {
          'tag': 'bug',
          'link': '#'
        },
        {
          'tag': 'important',
          'link': '#'
        }
      ],
      'team': [
        {
          'name': 'Dan',
          'job': 'Team coordination'
        }
      ],
      'content': content
    },
    {
      'id': '6',
      'title': 'Bug #233',
      'date': new MyDate('2015/08/22'),
      'symbol': stateSymbol.check,
      'tags': [
        {
          'tag': 'bug',
          'link': '#'
        },
        {
          'tag': 'important',
          'link': '#'
        }
      ],
      'team': [
        {
          'name': 'Dan',
          'job': 'Team coordination'
        }
      ],
      'content': content
    },
    {
      'id': '7',
      'title': 'Binary interface Issue #23',
      'date': new MyDate('2015/08/22'),
      'symbol': stateSymbol.exclamation,
      'tags': [
        {
          'tag': 'bug',
          'link': '#'
        },
        {
          'tag': 'important',
          'link': '#'
        }
      ],
      'team': [
        {
          'name': 'Dan',
          'job': 'Team coordination'
        }
      ],
      'content': content
    },
    {
      'id': '8',
      'title': 'Critographic function deprecated #22',
      'date': new MyDate('2015/08/22'),
      'symbol': stateSymbol.exclamation,
      'tags': [
        {
          'tag': 'bug',
          'link': '#'
        },
        {
          'tag': 'important',
          'link': '#'
        }
      ],
      'team': [
        {
          'name': 'Dan',
          'job': 'Team coordination'
        }
      ],
      'content': content
    },
    {
      'id': '9',
      'title': 'Bioinformatic Threat #2',
      'date': new MyDate('2015/08/22'),
      'symbol': stateSymbol.check,
      'tags': [
        {
          'tag': 'bug',
          'link': '#'
        },
        {
          'tag': 'important',
          'link': '#'
        }
      ],
      'team': [
        {
          'name': 'Dan',
          'job': 'Team coordination'
        }
      ],
      'content': content
    },
    {
      'id': '10',
      'title': '0-Day Exploit #22',
      'date': new MyDate('2015/08/22'),
      'symbol': stateSymbol.exclamation,
      'tags': [
        {
          'tag': 'bug',
          'link': '#'
        },
        {
          'tag': 'important',
          'link': '#'
        }
      ],
      'team': [
        {
          'name': 'Dan',
          'job': 'Team coordination'
        }
      ],
      'content': content
    },
    {
      'id': '11',
      'title': 'Kernel Panic #271',
      'date': new MyDate('2015/08/22'),
      'symbol': stateSymbol.check,
      'tags': [
        {
          'tag': 'bug',
          'link': '#'
        },
        {
          'tag': 'important',
          'link': '#'
        }
      ],
      'team': [
        {
          'name': 'Dan',
          'job': 'Team coordination'
        }
      ],
      'content': content
    },
    {
      'id': '12',
      'title': 'Contaiment Breach #1020',
      'date': new MyDate('2015/08/22'),
      'symbol': stateSymbol.check,
      'tags': [
        {
          'tag': 'bug',
          'link': '#'
        },
        {
          'tag': 'important',
          'link': '#'
        }
      ],
      'team': [
        {
          'name': 'Dan',
          'job': 'Team coordination'
        }
      ],
      'content': content
    },
    {
      'id': '13',
      'title': 'Security Threat #902',
      'date': new MyDate('2015/08/22'),
      'symbol': stateSymbol.check,
      'tags': [
        {
          'tag': 'bug',
          'link': '#'
        },
        {
          'tag': 'important',
          'link': '#'
        }
      ],
      'team': [
        {
          'name': 'Dan',
          'job': 'Team coordination'
        }
      ],
      'content': content
    },
    {
      'id': '14',
      'title': 'Security Threat #901',
      'date': new MyDate('2015/08/22'),
      'symbol': stateSymbol.check,
      'tags': [
        {
          'tag': 'bug',
          'link': '#'
        },
        {
          'tag': 'important',
          'link': '#'
        }
      ],
      'team': [
        {
          'name': 'Dan',
          'job': 'Team coordination'
        }
      ],
      'content': content
    },
    {
      'id': '15',
      'title': 'Security Threat #900',
      'date': new MyDate('2015/08/22'),
      'symbol': stateSymbol.check,
      'tags': [
        {
          'tag': 'bug',
          'link': '#'
        },
        {
          'tag': 'important',
          'link': '#'
        }
      ],
      'team': [
        {
          'name': 'Dan',
          'job': 'Team coordination'
        }
      ],
      'content': content
    },
    {
      'id': '16',
      'title': 'Security Threat #899',
      'date': new MyDate('2015/08/22'),
      'symbol': stateSymbol.check,
      'tags': [
        {
          'tag': 'bug',
          'link': '#'
        },
        {
          'tag': 'important',
          'link': '#'
        }
      ],
      'team': [
        {
          'name': 'Dan',
          'job': 'Team coordination'
        }
      ],
      'content': content
    },
    {
      'id': '17',
      'title': 'Private Keys Compromised',
      'date': new MyDate('2015/08/22'),
      'symbol': stateSymbol.check,
      'tags': [
        {
          'tag': 'bug',
          'link': '#'
        },
        {
          'tag': 'important',
          'link': '#'
        }
      ],
      'team': [
        {
          'name': 'Dan',
          'job': 'Team coordination'
        }
      ],
      'content': content
    },
    {
      'id': '18',
      'title': 'Security Threat #898',
      'date': new MyDate('2015/08/22'),
      'symbol': stateSymbol.check,
      'tags': [
        {
          'tag': 'bug',
          'link': '#'
        },
        {
          'tag': 'important',
          'link': '#'
        }
      ],
      'team': [
        {
          'name': 'Dan',
          'job': 'Team coordination'
        }
      ],
      'content': content
    },
    {
      'id': '19',
      'title': 'Security Threat #897',
      'date': new MyDate('2015/08/22'),
      'symbol': stateSymbol.check,
      'tags': [
        {
          'tag': 'bug',
          'link': '#'
        },
        {
          'tag': 'important',
          'link': '#'
        }
      ],
      'team': [
        {
          'name': 'Dan',
          'job': 'Team coordination'
        }
      ],
      'content': content
    },
    {
      'id': '20',
      'title': 'Security Threat #896',
      'date': new MyDate('2015/08/22'),
      'symbol': stateSymbol.check,
      'tags': [
        {
          'tag': 'bug',
          'link': '#'
        },
        {
          'tag': 'important',
          'link': '#'
        }
      ],
      'team': [
        {
          'name': 'Dan',
          'job': 'Team coordination'
        }
      ],
      'content': content
    },
    {
      'id': '21',
      'title': 'Security Threat #895',
      'date': new MyDate('2015/08/22'),
      'symbol': stateSymbol.check,
      'tags': [
        {
          'tag': 'bug',
          'link': '#'
        },
        {
          'tag': 'important',
          'link': '#'
        }
      ],
      'team': [
        {
          'name': 'Dan',
          'job': 'Team coordination'
        }
      ],
      'content': content
    },
    {
      'id': '22',
      'title': 'Security Threat #894',
      'date': new MyDate('2015/08/22'),
      'symbol': stateSymbol.check,
      'tags': [
        {
          'tag': 'bug',
          'link': '#'
        },
        {
          'tag': 'important',
          'link': '#'
        }
      ],
      'team': [
        {
          'name': 'Dan',
          'job': 'Team coordination'
        }
      ],
      'content': content
    },
    {
      'id': '23',
      'title': 'Security Threat #893',
      'date': new MyDate('2015/08/22'),
      'symbol': stateSymbol.check,
      'tags': [
        {
          'tag': 'bug',
          'link': '#'
        },
        {
          'tag': 'important',
          'link': '#'
        }
      ],
      'team': [
        {
          'name': 'Dan',
          'job': 'Team coordination'
        }
      ],
      'content': content
    },
    {
      'id': '24',
      'title': 'Security Threat #891',
      'date': new MyDate('2015/08/22'),
      'symbol': stateSymbol.exclamation,
      'tags': [
        {
          'tag': 'breach',
          'link': '#'
        },
        {
          'tag': 'threat',
          'link': '#'
        }
      ],
      'content': content

    }
  ]
}

data
