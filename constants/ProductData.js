

const allBooks = [
  { 
    id: 1, 
    name: 'Amazon Jungle', 
    image: 'amazon-jungle.jpg', 
    type: 'thriller',
    description: "Amazon Jungle is a thrilling expedition into the heart of darkness that beats within the world's largest rainforest. The book promises a tale woven with danger, discovery, and the untamed ferocity of nature. As the narrative unfolds, readers are taken on a journey alongside a group of explorers who set out to uncover the secrets hidden beneath the thick canopy, where daylight struggles to penetrate and every step could be a dance with death."
   },
   { 
    id: 2, 
    name: 'Break Wall', 
    image: 'break-wall.jpg', 
    type: 'thriller',
    description: "Break Wall is a suspenseful narrative set against the backdrop of a dystopian society where a monolithic wall symbolizes the division between the known and the unknown, the powerful and the powerless. As the story unfolds, readers are introduced to a society where the wall is not just a physical barrier but a psychological one, dictating the fate of the citizens who live in its shadow. The book follows the intertwined lives of individuals who are selected by the enigmatic authorities to break the wall. Each character is summoned for reasons they must unravel, leading to a compelling examination of their fears, hopes, and the secrets they carry. As the narrative progresses, the question of who will be the last to be called becomes a thread pulling the reader through a maze of intrigue and human drama."
   },
   { 
    id: 3, 
    name: 'Crow', 
    image: 'crow.jpg', 
    type: 'thriller',
    description: "A tale shrouded in mystery and the supernatural, set against the misty backdrop of a town where the line between myth and reality is blurred. The crow, a harbinger of omens, takes center stage in this story, becoming a symbol of the town's destiny as strange occurrences begin to unfold. The narrative follows a protagonist who is drawn into the enigmatic world of the crow, discovering its connection to the town's darkest secrets and history. As the story weaves through past and present, the protagonist might find themselves confronting not only the superstitions surrounding the crow but also the more tangible threat it represents to the community."
   },
   { 
    id: 4, 
    name: 'Cybernetic Stargazer', 
    image: 'cybernetic-stargazer.jpg', 
    type: 'science-fiction',
    description: "In the first installment of the Nocturnal Nexus Series, Morgan Maxwell invites readers into a world where artificial intelligence has breached the final frontier of human emotion and consciousness. The story follows an advanced robot, an entity of steel and circuitry, on a poignant quest to understand the vastness of the cosmos and its own existence within it. This sentient machine, designed for the cold realms of space, begins to experience existential curiosity, leading it on an introspective journey that mirrors humanity's age-old stargazing pursuits. As the robot gazes into the night sky, it becomes entangled in a complex web of events that challenge the boundaries between human and machine."
   },
   { 
    id: 5, 
    name: 'Destiny', 
    image: 'destiny.jpg', 
    type: 'science-fiction',
    description: "A compelling narrative that charts the journey of an individual standing at the crossroads of life. Set against the metaphorical backdrop of a sprawling desert, the protagonist embarks on a journey that is as much about traversing the physical wastelands as it is about navigating the complex dunes of the human experience. The story may follow the main character's quest for a deeper meaning to existence, driven by an inner voice that calls them to a destiny far greater than they had ever imagined. Along the way, encounters with others in the desert—each on their own quest—serve to mirror the diverse paths of destiny that people can take."
   },
   { 
    id: 6, 
    name: 'Game Of Your Mind', 
    image: 'game-of-your-mind.jpg', 
    type: 'science-fiction',
    description: "A thrilling dive into the psychological depths of human consciousness. The novel is a vivid tapestry of mind games where reality is more malleable and deceptive than it appears. It follows the journey of a protagonist who discovers an ability to navigate and manipulate the thoughts and memories of others, blurring the lines between perception and truth. The story explores the ethical and emotional turmoil that comes with such power, as the protagonist delves deeper into the minds of those around them. Each chapter could unravel part of a larger puzzle, with the protagonist's own mind becoming both the battlefield and the prize in a high-stakes game that questions the nature of free will and the sanctity of the human mind."
   },
   { 
    id: 7, 
    name: 'Mysterious Neighbor', 
    image: 'mysterious-neighbor.jpg', 
    type: 'thriller',
    description: "A gripping thriller that delves into the unsettling quiet of suburban life, where every house has a story and every window a secret. When a reclusive new resident moves into an unassuming neighborhood, their presence brings a series of inexplicable occurrences that disturb the mundane rhythm of daily life. The novel follows the protagonist, a curious and somewhat intrepid neighbor, who becomes fixated on uncovering the truth behind the newcomer's enigmatic behavior. As they peer through the veil of normalcy, they find themselves entangled in a web of secrets that are as obscure as the misted windows of the mysterious neighbor's home."
   },
   { 
    id: 8, 
    name: 'Mystery of the Village', 
    image: 'mystery-of-the-village.jpg', 
    type: 'thriller',
    description: "Mystery of the Village invites readers into the close-knit yet secretive world of a small village, where the dense surrounding forest holds as many mysteries as the residents themselves. The story begins when an outsider arrives, drawn by legends of the village and its hidden past. As the newcomer starts to peel back the layers of history and folklore, they uncover more than they bargained for, with each clue leading deeper into both the literal and metaphorical woods. Maxwell's narrative intertwines the fates of the villagers with the sinister allure of the forest, where ancient traditions and modern lives clash under the canopy of old growth. Themes of the novel may explore the tension between nature and civilization, the power of old legends, and the lengths to which people will go to protect their secrets."
   },
   { 
    id: 9, 
    name: 'Power', 
    image: 'power.jpg', 
    type: 'science-fiction',
    description: "In POWER, Morgan Maxwell electrifies the imagination with a tale of an ordinary individual who suddenly manifests an extraordinary ability. The novel opens with a jolt, as the protagonist experiences the first surge of unexplained energy, setting them apart from everyone else and marking the beginning of a life forever changed. The story likely follows the protagonist's journey to understand and control this new power, while grappling with the consequences it brings. As they navigate a world that fears and covets their ability, they must make difficult choices about how to use their power and whom to trust."
   },
   { 
    id: 10, 
    name: 'Rated-Mania', 
    image: 'rated-mania.jpg', 
    type: 'science-fiction',
    description: "Rated-Mania thrusts readers into the heart of a world overrun by the undead. In this gripping tale of horror and survival, the zombie apocalypse has arrived, and civilization crumbles as the dead rise to claim the earth. The novel follows a group of survivors who must navigate the ruins of society, battling not just the relentless horde of zombies, but also the remnants of humanity turned savage by desperation. As resources dwindle and safe havens become tombs, the survivors are forced to make harrowing decisions that test the limits of their morality and will to live."
   },
   { 
    id: 11, 
    name: 'The Dark Side of Winter', 
    image: 'the-dark-side-of-winter.jpg', 
    type: 'thriller',
    description: "In The Dark Side of Winter, Morgan Maxwell takes the reader on a chilling journey into the heart of a season that is as brutal as it is beautiful. The story unfolds in a small town that is shrouded in the bleakness of winter, where the cold air is as suffocating as the secrets it hides. The novel centers on the life of a character who becomes ensnared in the town's mysteries when a series of events disrupts the quiet of the long, dark winter months. As the protagonist is drawn deeper into the investigation, the starkness of the landscape mirrors the desolation and complexity of the human soul."
   },
   { 
    id: 12, 
    name: 'We Will Meet on the Stars', 
    image: 'we-will-meet-on-the-stars.jpg', 
    type: 'science-fiction',
    description: "An intergalactic tale of love that transcends the boundaries of space, species, and societal norms. Set against the backdrop of a universe brimming with wonder and diversity, the story follows the emotional journey of a human woman and an alien man whose love challenges the prejudices and politics of a galaxy where such unions are forbidden. The novel alternates between the vibrant, chaotic beauty of space and the intimate, internal landscapes of its characters. As the couple fights for their right to be together, they become entangled in a larger movement that questions the galaxy's strictures on love and alliance."
   },
   { 
    id: 13, 
    name: 'Gate', 
    image: 'gate.jpg', 
    type: 'science-fiction',
    description: "Gate is a fascinant tale that invites readers to step through an extraordinary portal into a realm where the mystical and the mortal intertwine. The story revolves around an ancient gate that appears to those who are seeking answers, offering a passage to a place that exists between the known and the unknown. This is the journey of a protagonist who, burdened by a life-altering question or a profound sense of loss, is drawn to the gate's promise of enlightenment. As they step through the threshold, they enter a world that defies their understanding of reality, filled with challenges, wonders, and beings that guide or hinder their quest."
   },
   { 
    id: 14, 
    name: 'Time', 
    collection: '(The Secrets of Time #1)', 
    image: 'time.jpg', 
    type: 'secrets-of-time',
    description: "Time is the first novel in the Secret's of Time trilogy, a journey that transcends the ordinary flow of hours and days. In this story, the steady tick of the clock on the cover is more than a measure of moments; it's a gateway to the past and future, holding secrets that ripple through the ages. The narrative begins with the discovery of the antique clock, which possesses inexplicable powers that draw the protagonist into a whirlwind of temporal adventures. As they grapple with the clock's mysteries, they find themselves slipping between eras, from the distant past to the far-flung future, uncovering truths that have the power to change history itself."
  },
  { 
    id: 15, 
    name: 'Treasure', 
    collection: '(The Secrets of Time #2)', 
    image: 'treasure.jpg', 
    type: 'secrets-of-time',
    description: "The second installment of the Secret's of Time trilogy, the adventure deepens as the protagonist's journey through the mysteries of time continues. Following the temporal pathways opened by the clock in the first book, Time, the characters find themselves on a quest that spans centuries, seeking a treasure that is more than just gold or jewels—it's a legacy that could reshape history. The novel likely sees the protagonists deciphering ancient clues, outwitting adversaries who are also on the trail of the treasure, and confronting the moral dilemmas that come with the potential power and wealth the treasure represents. As they traverse through different eras, they must also navigate the changing landscapes and societies that they encounter."
  },
  { 
    id: 16, 
    name: 'Soldier', 
    collection: '(The Secrets of Time #3)', 
    image: 'soldier.jpg', 
    type: 'secrets-of-time',
    description: "Soldier is the epic conclusion to the thrilling trilogy that began with Time and continued with Treasure. The story reaches a crescendo as the protagonist's time-spanning journey converges on a pivotal moment in history. The soldier on the cover represents the final piece of a temporal puzzle, a guardian of a secret that has the power to alter the course of time. The narrative follows protagonist as they assume the role of a soldier embedded in a critical point of history, where every action could have far-reaching consequences for the future. With the knowledge of the treasure and the lessons from the past, the protagonist must navigate the dangerous waters of wartime intrigue and espionage."
  },
  { 
    id: 17, 
    name: 'The Young Wizard', 
    collection: '(Mystic Fire #1)', 
    image: 'the-young-wizard.jpg', 
    type: 'mystic-fire',
    description: "The Young Wizard is the first book in the Mystic Fire Saga. This trilogy invites readers into a world where magic is not only real, but it is the fabric that weaves the fate of kingdoms. The novel introduces us to a young and untested wizard, whose latent powers are on the cusp of awakening. The story follows the wizard's journey from obscurity to the halls of the arcane, where ancient spells and mystical beings are woven into the fabric of his education. As he learns to harness his burgeoning abilities, the young wizard must also navigate the treacherous politics of a world where magic is power, and power is a double-edged sword."
   },
   { 
    id: 18, 
    name: 'The Scary Forest', 
    collection: '(Mystic Fire #2)', 
    image: 'the-scary-forest.jpg', 
    type: 'mystic-fire',
    description: "In The Scary Forest, the thrilling sequel to The Young Wizard, the saga continues as our hero delves deeper into the shadows of a world where magic intertwines with danger at every turn. Following the events that saw the young wizard come into his power, he now faces a new challenge that lurks within the depths of the Scary Forest, a place whispered about in legends and feared by all. The story follows the protagonist and his companions as they journey into the heart of the forest, guided by the flickering light of a torch and the call of destiny. What awaits them is a test of courage and strength, as the forest is said to be home to creatures and curses that prey on the unwary."
   },
   { 
    id: 19, 
    name: 'The Lost Sorcerer', 
    collection: '(Mystic Fire #3)', 
    image: 'the-lost-sorcerer.jpg', 
    type: 'mystic-fire',
    description: "In The Lost Sorcer the climactic finale to the Mystic Fire Saga, the young wizard, now seasoned by the trials of his journey, faces his greatest challenge yet. The Dark Prophecy foretold at the beginning of his journey is coming to fruition, and the key to salvation lies with the Lost Sorcerer, a mythical figure shrouded in legend and feared by many. The narrative follows our hero as he ventures into the heart of darkness to find the Lost Sorcerer, believed to be the only one who can avert the looming catastrophe. With the world on the brink of destruction, the protagonist must rally allies both old and new to stand against the forces that threaten to unravel the fabric of reality."
   },
   { 
    id: 20, 
    name: 'Sword', 
    collection: '(Valhalla #1)', 
    image: 'sword.jpg', 
    type: 'valhalla',
    description: "Sword marks the beginning of Valhalla's trilogy, a sweeping epic set in a realm where the fate of kingdoms is bound to the power of enchanted weapons and the heroes who wield them. The novel introduces a legendary sword, lost to the world, its hilt kissed by the craftsmanship of the ancients and its blade forged in the fires of legend. The story follows a young protagonist, plucked from obscurity by destiny's hand, who must undertake a perilous journey to retrieve the sword from its stone pedestal in the high mountains. It is said that only one of true heart can claim it, and with the land threatened by a looming darkness, the need for a hero has never been greater."
   },
   { 
    id: 21, 
    name: 'Warrior', 
    collection: '(Valhalla #2)', 
    image: 'warrior.jpg', 
    type: 'valhalla',
    description: "In Warrior, the saga that commenced with Sword takes a turn toward the visceral realities of combat and the complexities of the warrior's path. The protagonist, now in possession of the mythical sword, must come to terms with the weight of the blade and the responsibilities it bestows. This installment delves into the heart of the warrior's journey, where the protagonist must not only fight external battles but also internal ones. As the forces of darkness gather strength, the warrior must rally allies and lead them into battle, all the while wrestling with the knowledge that every victory comes with a cost."
   },
   { 
    id: 22, 
    name: 'King', 
    collection: '(Valhalla #3)', 
    image: 'king.jpg', 
    type: 'valhalla',
    description: "King brings the epic trilogy that began with Sword and continued through Warrior to its grand conclusion. The protagonist, once a seeker of the legendary sword and then a leader of warriors, now ascends to the ultimate role of ruler. With the enchanted sword by his side, he must unite a fractured kingdom and lead it against the encroaching darkness that threatens to engulf the world. The narrative focusses on the complexities of leadership and the burden of the crown. As the new king, the protagonist must navigate the treacherous waters of court politics, alliances, and the expectations of his people. The jeweled sword, a symbol of his right to rule, also serves as a beacon of hope to rally his kingdom against the looming threat."
   },
   { 
    id: 23, 
    name: 'The Only Girl',
    collection: '(Final Girl #1)',  
    image: 'the-only-girl.jpg', 
    type: 'final-girl',
    description: "The Only Girl is the opening novel of the Final Girl compelling trilogy, introduces readers to a world that seems as grand and imposing as the halls its young protagonist wanders alone. This story begins with a simple yet profound premise: a girl on the brink of adolescence, isolated from her peers, who must navigate the labyrinthine corridors of a life marked by silence and solitude. The novel follows the girl's internal and external journey as she grapples with the complexities of growing up utterly alone in a world that doesn't seem to hear her voice. The grand hall, a metaphor for the spaces she inhabits—both physically and mentally—serves as the stage for a series of encounters and experiences that shape her understanding of herself and her place in the world."
   },
   { 
    id: 24, 
    name: 'The Girl In The Woods',
    collection: '(Final Girl #2)',  
    image: 'the-girl-in-the-woods.jpg', 
    type: 'final-girl',
    description: "The Girl in the Woods is the second installment in the Final Girl trilogy, continues the journey of the enigmatic girl introduced in The Only Girl. In this chapter, the narrative delves deeper into the tangled woods of her story, revealing the hidden layers of a mystery that envelops her life. The protagonist, now older and perhaps wiser to the ways of the world, finds herself inextricably linked to the dense, shadowy woods that seem to mirror the complexities of her own inner landscape. The woods become a character in their own right, a place where secrets are buried deep beneath the roots and truths dangle from the branches like leaves waiting to fall."
   },
   { 
    id: 25, 
    name: 'Final Girl', 
    collection: '(Final Girl #3)', 
    image: 'final-girl.jpg', 
    type: 'final-girl',
    description: "The gripping conclusion to Morgan Maxwell's Final Girl trilogy, readers are plunged into the climax of a heart-stopping saga that has spanned the course of two harrowing tales of survival, strength, and the fight against overwhelming darkness. The title, a term often used in horror and suspense genres to denote the last woman standing after a series of gruesome events, suggests our protagonist has endured unspeakable challenges to reach this point. The story follows the journey of the 'final girl,' who has evolved from a survivor of terrifying ordeals into a warrior confronting the malevolent forces that have haunted her and her companions. Battling the shadows of her past and the very real terrors of her present, she stands at the threshold of a final confrontation that promises to bring closure to the trials she has faced."
   },
   { 
    id: 26, 
    name: 'Spear', 
    collection: '(Silent Stranger #1)', 
    image: 'spear.jpg', 
    type: 'silent-stranger',
    description: "Spear is the first book of the Silent Stranger series and introduces readers to a world where darkness veils potential threats and the heart's desires. The novel opens with the discovery of an ancient spear, rumored to possess the power to pierce through the veils of deception to reach the truth. The protagonist, a young individual entangled in a web of secrecy and latent danger, comes into possession of this mystical weapon, setting off a chain of events that could alter the course of their life. The narrative follows the protagonist's journey as they learn to wield the spear, not just as a weapon, but as a tool to navigate the treacherous paths of love and betrayal. The rose and the heart imagery suggest that their quest is as much about protecting their own heart as it is about uncovering the mysteries and motivations of those around them."
   },
   { 
    id: 27, 
    name: 'Ranch',
    collection: '(Silent Stranger #2)',  
    image: 'ranch.jpg', 
    type: 'silent-stranger',
    description: "In Ranch, the mystique and adventure deepen following the revelations of Spear. The protagonist, now versed in the power of the ancient weapon, finds themselves at the heart of a rural expanse, far from the familiar urban shadows where their journey began. The ranch, a place of seeming tranquility, hides beneath it a maelstrom of secrets that thunder with the promise of danger. Following the protagonist as they encounter the denizens of the ranch, each with their own stories and secrets that are as intertwined with the land as the roots of the ancient trees that watch over them. As the storm brews, the protagonist must unravel the connections between the spear's legacy and the ranch's eerie past."
   },
   { 
    id: 28, 
    name: 'Alone',
    collection: '(Silent Stranger #3)',  
    image: 'alone.jpg', 
    type: 'silent-stranger',
    description: "Alone brings the thrilling saga that Silent Stranger saga to a poignant and powerful conclusion. After the events at the Ranch, the protagonist finds themselves in isolation, both physically and emotionally. This part of the journey is about introspection and the struggle within, as much as it is about the external challenges that have been faced. The narrative follows the protagonist's solitary path to understanding the true power of the spear and the responsibilities it carries. As they walk the line between light and darkness, the quietness of being alone offers a chance to reflect on the past and comprehend the future that awaits."
   },
  ];

  const recent = [
    { 
      id: 1, 
      name: 'Destiny', 
      image: 'destiny.jpg', 
      type: 'recent',
      description: "A compelling narrative that charts the journey of an individual standing at the crossroads of life. Set against the metaphorical backdrop of a sprawling desert, the protagonist embarks on a journey that is as much about traversing the physical wastelands as it is about navigating the complex dunes of the human experience. The story may follow the main character's quest for a deeper meaning to existence, driven by an inner voice that calls them to a destiny far greater than they had ever imagined. Along the way, encounters with others in the desert—each on their own quest—serve to mirror the diverse paths of destiny that people can take."
     },
     { 
      id: 2, 
      name: 'We Will Meet on the Stars', 
      image: 'we-will-meet-on-the-stars.jpg', 
      type: 'recent',
      description: "An intergalactic tale of love that transcends the boundaries of space, species, and societal norms. Set against the backdrop of a universe brimming with wonder and diversity, the story follows the emotional journey of a human woman and an alien man whose love challenges the prejudices and politics of a galaxy where such unions are forbidden. The novel alternates between the vibrant, chaotic beauty of space and the intimate, internal landscapes of its characters. As the couple fights for their right to be together, they become entangled in a larger movement that questions the galaxy's strictures on love and alliance."
     },
     { 
      id: 3, 
      name: 'Rated-Mania', 
      image: 'rated-mania.jpg', 
      type: 'recent',
      description: "Rated-Mania thrusts readers into the heart of a world overrun by the undead. In this gripping tale of horror and survival, the zombie apocalypse has arrived, and civilization crumbles as the dead rise to claim the earth. The novel follows a group of survivors who must navigate the ruins of society, battling not just the relentless horde of zombies, but also the remnants of humanity turned savage by desperation. As resources dwindle and safe havens become tombs, the survivors are forced to make harrowing decisions that test the limits of their morality and will to live."
     },
     { 
      id: 4, 
      name: 'The Dark Side of Winter', 
      image: 'the-dark-side-of-winter.jpg', 
      type: 'recent',
      description: "In The Dark Side of Winter, Morgan Maxwell takes the reader on a chilling journey into the heart of a season that is as brutal as it is beautiful. The story unfolds in a small town that is shrouded in the bleakness of winter, where the cold air is as suffocating as the secrets it hides. The novel centers on the life of a character who becomes ensnared in the town's mysteries when a series of events disrupts the quiet of the long, dark winter months. As the protagonist is drawn deeper into the investigation, the starkness of the landscape mirrors the desolation and complexity of the human soul."
     },
     { 
      id: 5, 
      name: 'The Girl In The Woods', 
      collection: '(Final Girl #2)', 
      image: 'the-girl-in-the-woods.jpg', 
      type: 'recent',
      description: "The Girl in the Woods is the second installment in Morgan Maxwell's enthralling trilogy, continues the journey of the enigmatic girl introduced in The Only Girl. In this chapter, the narrative delves deeper into the tangled woods of her story, revealing the hidden layers of a mystery that envelops her life. The protagonist, now older and perhaps wiser to the ways of the world, finds herself inextricably linked to the dense, shadowy woods that seem to mirror the complexities of her own inner landscape. The woods become a character in their own right, a place where secrets are buried deep beneath the roots and truths dangle from the branches like leaves waiting to fall."
     },
     { 
      id: 6, 
      name: 'Gate', 
      image: 'gate.jpg', 
      type: 'recent',
      description: "Gate is a fascinant tale that invites readers to step through an extraordinary portal into a realm where the mystical and the mortal intertwine. The story revolves around an ancient gate that appears to those who are seeking answers, offering a passage to a place that exists between the known and the unknown. This is the journey of a protagonist who, burdened by a life-altering question or a profound sense of loss, is drawn to the gate's promise of enlightenment. As they step through the threshold, they enter a world that defies their understanding of reality, filled with challenges, wonders, and beings that guide or hinder their quest."
     },
  ];
  
  const standalones = [
    { 
      id: 1, 
      name: 'Power', 
      image: 'power.jpg', 
      type: 'standalones',
      description: "In POWER, Morgan Maxwell electrifies the imagination with a tale of an ordinary individual who suddenly manifests an extraordinary ability. The novel opens with a jolt, as the protagonist experiences the first surge of unexplained energy, setting them apart from everyone else and marking the beginning of a life forever changed. The story likely follows the protagonist's journey to understand and control this new power, while grappling with the consequences it brings. As they navigate a world that fears and covets their ability, they must make difficult choices about how to use their power and whom to trust."
     },
     { 
      id: 2, 
      name: 'Crow', 
      image: 'crow.jpg', 
      type: 'standalones',
      description: "A tale shrouded in mystery and the supernatural, set against the misty backdrop of a town where the line between myth and reality is blurred. The crow, a harbinger of omens, takes center stage in this story, becoming a symbol of the town's destiny as strange occurrences begin to unfold. The narrative follows a protagonist who is drawn into the enigmatic world of the crow, discovering its connection to the town's darkest secrets and history. As the story weaves through past and present, the protagonist might find themselves confronting not only the superstitions surrounding the crow but also the more tangible threat it represents to the community."
     },
     { 
      id: 3, 
      name: 'Cybernetic Stargazer', 
      image: 'cybernetic-stargazer.jpg', 
      type: 'standalones',
      description: "In the first installment of the Nocturnal Nexus Series, Morgan Maxwell invites readers into a world where artificial intelligence has breached the final frontier of human emotion and consciousness. The story follows an advanced robot, an entity of steel and circuitry, on a poignant quest to understand the vastness of the cosmos and its own existence within it. This sentient machine, designed for the cold realms of space, begins to experience existential curiosity, leading it on an introspective journey that mirrors humanity's age-old stargazing pursuits. As the robot gazes into the night sky, it becomes entangled in a complex web of events that challenge the boundaries between human and machine."
     },
     { 
      id: 4, 
      name: 'Destiny', 
      image: 'destiny.jpg', 
      type: 'standalones',
      description: "A compelling narrative that charts the journey of an individual standing at the crossroads of life. Set against the metaphorical backdrop of a sprawling desert, the protagonist embarks on a journey that is as much about traversing the physical wastelands as it is about navigating the complex dunes of the human experience. The story may follow the main character's quest for a deeper meaning to existence, driven by an inner voice that calls them to a destiny far greater than they had ever imagined. Along the way, encounters with others in the desert—each on their own quest—serve to mirror the diverse paths of destiny that people can take."
     },
     { 
      id: 5, 
      name: 'Amazon Jungle', 
      image: 'amazon-jungle.jpg', 
      type: 'standalones',
      description: "Amazon Jungle is a thrilling expedition into the heart of darkness that beats within the world's largest rainforest. The book promises a tale woven with danger, discovery, and the untamed ferocity of nature. As the narrative unfolds, readers are taken on a journey alongside a group of explorers who set out to uncover the secrets hidden beneath the thick canopy, where daylight struggles to penetrate and every step could be a dance with death."
     },
     { 
      id: 6, 
      name: 'Break Wall', 
      image: 'break-wall.jpg', 
      type: 'standalones',
      description: "Break Wall is a suspenseful narrative set against the backdrop of a dystopian society where a monolithic wall symbolizes the division between the known and the unknown, the powerful and the powerless. As the story unfolds, readers are introduced to a society where the wall is not just a physical barrier but a psychological one, dictating the fate of the citizens who live in its shadow. The book follows the intertwined lives of individuals who are selected by the enigmatic authorities to break the wall. Each character is summoned for reasons they must unravel, leading to a compelling examination of their fears, hopes, and the secrets they carry. As the narrative progresses, the question of who will be the last to be called becomes a thread pulling the reader through a maze of intrigue and human drama."
     },
     { 
      id: 7, 
      name: 'The Dark Side of Winter', 
      image: 'the-dark-side-of-winter.jpg', 
      type: 'standalones',
      description: "In The Dark Side of Winter, Morgan Maxwell takes the reader on a chilling journey into the heart of a season that is as brutal as it is beautiful. The story unfolds in a small town that is shrouded in the bleakness of winter, where the cold air is as suffocating as the secrets it hides. The novel centers on the life of a character who becomes ensnared in the town's mysteries when a series of events disrupts the quiet of the long, dark winter months. As the protagonist is drawn deeper into the investigation, the starkness of the landscape mirrors the desolation and complexity of the human soul."
     },
     { 
      id: 8, 
      name: 'We Will Meet on the Stars', 
      image: 'we-will-meet-on-the-stars.jpg', 
      type: 'standalones',
      description: "An intergalactic tale of love that transcends the boundaries of space, species, and societal norms. Set against the backdrop of a universe brimming with wonder and diversity, the story follows the emotional journey of a human woman and an alien man whose love challenges the prejudices and politics of a galaxy where such unions are forbidden. The novel alternates between the vibrant, chaotic beauty of space and the intimate, internal landscapes of its characters. As the couple fights for their right to be together, they become entangled in a larger movement that questions the galaxy's strictures on love and alliance."
     },
     { 
      id: 9, 
      name: 'Game Of Your Mind', 
      image: 'game-of-your-mind.jpg', 
      type: 'standalones',
      description: "A thrilling dive into the psychological depths of human consciousness. The novel is a vivid tapestry of mind games where reality is more malleable and deceptive than it appears. It follows the journey of a protagonist who discovers an ability to navigate and manipulate the thoughts and memories of others, blurring the lines between perception and truth. The story explores the ethical and emotional turmoil that comes with such power, as the protagonist delves deeper into the minds of those around them. Each chapter could unravel part of a larger puzzle, with the protagonist's own mind becoming both the battlefield and the prize in a high-stakes game that questions the nature of free will and the sanctity of the human mind."
     },
     { 
      id: 10, 
      name: 'Mysterious Neighbor', 
      image: 'mysterious-neighbor.jpg', 
      type: 'standalones',
      description: "A gripping thriller that delves into the unsettling quiet of suburban life, where every house has a story and every window a secret. When a reclusive new resident moves into an unassuming neighborhood, their presence brings a series of inexplicable occurrences that disturb the mundane rhythm of daily life. The novel follows the protagonist, a curious and somewhat intrepid neighbor, who becomes fixated on uncovering the truth behind the newcomer's enigmatic behavior. As they peer through the veil of normalcy, they find themselves entangled in a web of secrets that are as obscure as the misted windows of the mysterious neighbor's home."
     },
     { 
      id: 11, 
      name: 'Mystery of the Village', 
      image: 'mystery-of-the-village.jpg', 
      type: 'standalones',
      description: "Mystery of the Village invites readers into the close-knit yet secretive world of a small village, where the dense surrounding forest holds as many mysteries as the residents themselves. The story begins when an outsider arrives, drawn by legends of the village and its hidden past. As the newcomer starts to peel back the layers of history and folklore, they uncover more than they bargained for, with each clue leading deeper into both the literal and metaphorical woods. Maxwell's narrative intertwines the fates of the villagers with the sinister allure of the forest, where ancient traditions and modern lives clash under the canopy of old growth. Themes of the novel may explore the tension between nature and civilization, the power of old legends, and the lengths to which people will go to protect their secrets."
     },
     { 
      id: 12, 
      name: 'Rated-Mania', 
      image: 'rated-mania.jpg', 
      type: 'standalones',
      description: "Rated-Mania thrusts readers into the heart of a world overrun by the undead. In this gripping tale of horror and survival, the zombie apocalypse has arrived, and civilization crumbles as the dead rise to claim the earth. The novel follows a group of survivors who must navigate the ruins of society, battling not just the relentless horde of zombies, but also the remnants of humanity turned savage by desperation. As resources dwindle and safe havens become tombs, the survivors are forced to make harrowing decisions that test the limits of their morality and will to live."
     },
     { 
      id: 13, 
      name: 'Gate', 
      image: 'gate.jpg', 
      type: 'recent',
      description: "Gate is a fascinant tale that invites readers to step through an extraordinary portal into a realm where the mystical and the mortal intertwine. The story revolves around an ancient gate that appears to those who are seeking answers, offering a passage to a place that exists between the known and the unknown. This is the journey of a protagonist who, burdened by a life-altering question or a profound sense of loss, is drawn to the gate's promise of enlightenment. As they step through the threshold, they enter a world that defies their understanding of reality, filled with challenges, wonders, and beings that guide or hinder their quest."
     },
  ];

  const secretsOfTime = [
    { 
      id: 1, 
      name: 'Time', 
      collection: '(The Secrets of Time #1)', 
      image: 'time.jpg', 
      type: 'secrets-of-time',
      description: "Time is the first novel in the Secret's of Time trilogy, a journey that transcends the ordinary flow of hours and days. In this story, the steady tick of the clock on the cover is more than a measure of moments; it's a gateway to the past and future, holding secrets that ripple through the ages. The narrative begins with the discovery of the antique clock, which possesses inexplicable powers that draw the protagonist into a whirlwind of temporal adventures. As they grapple with the clock's mysteries, they find themselves slipping between eras, from the distant past to the far-flung future, uncovering truths that have the power to change history itself."
     },
     { 
      id: 2, 
      name: 'Treasure',
      collection: '(The Secrets of Time #2)',  
      image: 'treasure.jpg', 
      type: 'secrets-of-time',
      description: "The second installment of the Secret's of Time trilogy, the adventure deepens as the protagonist's journey through the mysteries of time continues. Following the temporal pathways opened by the clock in the first book, Time, the characters find themselves on a quest that spans centuries, seeking a treasure that is more than just gold or jewels—it's a legacy that could reshape history. The novel likely sees the protagonists deciphering ancient clues, outwitting adversaries who are also on the trail of the treasure, and confronting the moral dilemmas that come with the potential power and wealth the treasure represents. As they traverse through different eras, they must also navigate the changing landscapes and societies that they encounter."
     },
     { 
      id: 3, 
      name: 'Soldier',
      collection: '(The Secrets of Time #3)', 
      image: 'soldier.jpg', 
      type: 'secrets-of-time',
      description: "Soldier is the epic conclusion to the thrilling trilogy that began with Time and continued with Treasure. The story reaches a crescendo as the protagonist's time-spanning journey converges on a pivotal moment in history. The soldier on the cover represents the final piece of a temporal puzzle, a guardian of a secret that has the power to alter the course of time. The narrative follows protagonist as they assume the role of a soldier embedded in a critical point of history, where every action could have far-reaching consequences for the future. With the knowledge of the treasure and the lessons from the past, the protagonist must navigate the dangerous waters of wartime intrigue and espionage."
     },
  ];

  const mysticFire = [
    { 
      id: 1, 
      name: 'The Young Wizard', 
      collection: '(Mystic Fire #1)', 
      image: 'the-young-wizard.jpg', 
      type: 'mystic-fire',
      description: "The Young Wizard is the first book in the Mystic Fire Saga. This trilogy invites readers into a world where magic is not only real, but it is the fabric that weaves the fate of kingdoms. The novel introduces us to a young and untested wizard, whose latent powers are on the cusp of awakening. The story follows the wizard's journey from obscurity to the halls of the arcane, where ancient spells and mystical beings are woven into the fabric of his education. As he learns to harness his burgeoning abilities, the young wizard must also navigate the treacherous politics of a world where magic is power, and power is a double-edged sword."
     },
     { 
      id: 2, 
      name: 'The Scary Forest',
      collection: '(Mystic Fire #2)', 
      image: 'the-scary-forest.jpg', 
      type: 'mystic-fire',
      description: "In The Scary Forest, the thrilling sequel to The Young Wizard, the saga continues as our hero delves deeper into the shadows of a world where magic intertwines with danger at every turn. Following the events that saw the young wizard come into his power, he now faces a new challenge that lurks within the depths of the Scary Forest, a place whispered about in legends and feared by all. The story follows the protagonist and his companions as they journey into the heart of the forest, guided by the flickering light of a torch and the call of destiny. What awaits them is a test of courage and strength, as the forest is said to be home to creatures and curses that prey on the unwary."
     },
     { 
      id: 3, 
      name: 'The Lost Sorcerer',
      collection: '(Mystic Fire #3)',  
      image: 'the-lost-sorcerer.jpg', 
      type: 'mystic-fire',
      description: "In The Lost Sorcer the climactic finale to the Mystic Fire Saga, the young wizard, now seasoned by the trials of his journey, faces his greatest challenge yet. The Dark Prophecy foretold at the beginning of his journey is coming to fruition, and the key to salvation lies with the Lost Sorcerer, a mythical figure shrouded in legend and feared by many. The narrative follows our hero as he ventures into the heart of darkness to find the Lost Sorcerer, believed to be the only one who can avert the looming catastrophe. With the world on the brink of destruction, the protagonist must rally allies both old and new to stand against the forces that threaten to unravel the fabric of reality."
     },
  ];

  const valhalla = [
    { 
      id: 1, 
      name: 'Sword', 
      collection: '(Valhalla #1)',
      image: 'sword.jpg', 
      type: 'valhalla',
      description: "Sword marks the beginning of Valhalla's trilogy, a sweeping epic set in a realm where the fate of kingdoms is bound to the power of enchanted weapons and the heroes who wield them. The novel introduces a legendary sword, lost to the world, its hilt kissed by the craftsmanship of the ancients and its blade forged in the fires of legend. The story follows a young protagonist, plucked from obscurity by destiny's hand, who must undertake a perilous journey to retrieve the sword from its stone pedestal in the high mountains. It is said that only one of true heart can claim it, and with the land threatened by a looming darkness, the need for a hero has never been greater."
     },
     { 
      id: 2, 
      name: 'Warrior', 
      collection: '(Valhalla #2)',
      image: 'warrior.jpg', 
      type: 'valhalla',
      description: "In Warrior, the saga that commenced with Sword takes a turn toward the visceral realities of combat and the complexities of the warrior's path. The protagonist, now in possession of the mythical sword, must come to terms with the weight of the blade and the responsibilities it bestows. This installment delves into the heart of the warrior's journey, where the protagonist must not only fight external battles but also internal ones. As the forces of darkness gather strength, the warrior must rally allies and lead them into battle, all the while wrestling with the knowledge that every victory comes with a cost."
     },
     { 
      id: 3, 
      name: 'King',
      collection: '(Valhalla #3)', 
      image: 'king.jpg', 
      type: 'valhalla',
      description: "King brings the epic trilogy that began with Sword and continued through Warrior to its grand conclusion. The protagonist, once a seeker of the legendary sword and then a leader of warriors, now ascends to the ultimate role of ruler. With the enchanted sword by his side, he must unite a fractured kingdom and lead it against the encroaching darkness that threatens to engulf the world. The narrative focusses on the complexities of leadership and the burden of the crown. As the new king, the protagonist must navigate the treacherous waters of court politics, alliances, and the expectations of his people. The jeweled sword, a symbol of his right to rule, also serves as a beacon of hope to rally his kingdom against the looming threat."
     },
  ];

  const finalGirl = [
    { 
      id: 1, 
      name: 'The Only Girl', 
      collection: '(Final Girl #1)',
      image: 'the-only-girl.jpg', 
      type: 'final girl',
      description: "The Only Girl is the opening novel of the Final Girl compelling trilogy, introduces readers to a world that seems as grand and imposing as the halls its young protagonist wanders alone. This story begins with a simple yet profound premise: a girl on the brink of adolescence, isolated from her peers, who must navigate the labyrinthine corridors of a life marked by silence and solitude. The novel follows the girl's internal and external journey as she grapples with the complexities of growing up utterly alone in a world that doesn't seem to hear her voice. The grand hall, a metaphor for the spaces she inhabits—both physically and mentally—serves as the stage for a series of encounters and experiences that shape her understanding of herself and her place in the world."
     },
     { 
      id: 2, 
      name: 'The Girl In The Woods', 
      collection: '(Final Girl #2)',
      image: 'the-girl-in-the-woods.jpg', 
      type: 'final-girl',
      description: "The Girl in the Woods is the second installment in the Final Girl trilogy, continues the journey of the enigmatic girl introduced in The Only Girl. In this chapter, the narrative delves deeper into the tangled woods of her story, revealing the hidden layers of a mystery that envelops her life. The protagonist, now older and perhaps wiser to the ways of the world, finds herself inextricably linked to the dense, shadowy woods that seem to mirror the complexities of her own inner landscape. The woods become a character in their own right, a place where secrets are buried deep beneath the roots and truths dangle from the branches like leaves waiting to fall."
     },
     { 
      id: 3, 
      name: 'Final Girl',
      collection: '(Final Girl #3)', 
      image: 'final-girl.jpg', 
      type: 'final-girl',
      description: "The gripping conclusion to Morgan Maxwell's Final Girl trilogy, readers are plunged into the climax of a heart-stopping saga that has spanned the course of two harrowing tales of survival, strength, and the fight against overwhelming darkness. The title, a term often used in horror and suspense genres to denote the last woman standing after a series of gruesome events, suggests our protagonist has endured unspeakable challenges to reach this point. The story follows the journey of the 'final girl,' who has evolved from a survivor of terrifying ordeals into a warrior confronting the malevolent forces that have haunted her and her companions. Battling the shadows of her past and the very real terrors of her present, she stands at the threshold of a final confrontation that promises to bring closure to the trials she has faced."
     },
  ];

  const silentStranger = [
    { 
      id: 1, 
      name: 'Spear', 
      collection: '(Silent Stranger #1)',
      image: 'spear.jpg', 
      type: 'silent-stranger',
      description: "Spear is the first book of the Silent Stranger series and introduces readers to a world where darkness veils potential threats and the heart's desires. The novel opens with the discovery of an ancient spear, rumored to possess the power to pierce through the veils of deception to reach the truth. The protagonist, a young individual entangled in a web of secrecy and latent danger, comes into possession of this mystical weapon, setting off a chain of events that could alter the course of their life. The narrative follows the protagonist's journey as they learn to wield the spear, not just as a weapon, but as a tool to navigate the treacherous paths of love and betrayal. The rose and the heart imagery suggest that their quest is as much about protecting their own heart as it is about uncovering the mysteries and motivations of those around them."
     },
     { 
      id: 2, 
      name: 'Ranch', 
      collection: '(Silent Stranger #2)',
      image: 'ranch.jpg', 
      type: 'silent-stranger',
      description: "In Ranch, the mystique and adventure deepen following the revelations of Spear. The protagonist, now versed in the power of the ancient weapon, finds themselves at the heart of a rural expanse, far from the familiar urban shadows where their journey began. The ranch, a place of seeming tranquility, hides beneath it a maelstrom of secrets that thunder with the promise of danger. Following the protagonist as they encounter the denizens of the ranch, each with their own stories and secrets that are as intertwined with the land as the roots of the ancient trees that watch over them. As the storm brews, the protagonist must unravel the connections between the spear's legacy and the ranch's eerie past."
     },
     { 
      id: 3, 
      name: 'Alone',
      collection: '(Silent Stranger #3)', 
      image: 'alone.jpg', 
      type: 'silent-stranger',
      description: "Alone brings the thrilling saga that Silent Stranger saga to a poignant and powerful conclusion. After the events at the Ranch, the protagonist finds themselves in isolation, both physically and emotionally. This part of the journey is about introspection and the struggle within, as much as it is about the external challenges that have been faced. The narrative follows the protagonist's solitary path to understanding the true power of the spear and the responsibilities it carries. As they walk the line between light and darkness, the quietness of being alone offers a chance to reflect on the past and comprehend the future that awaits."
     },
  ];




  
  export default {
    allBooks,
    recent,
    standalones,
    secretsOfTime,
    mysticFire,
    valhalla,
    finalGirl,
    silentStranger,
  };
  