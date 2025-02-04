const e = [
  "schwierig"
], s = [
  "leicht"
], n = [
  "Feedback"
], t = [
  "Gut"
], i = [
  "ok"
], r = [
  "OK"
], a = [
  "Slug"
], h = {
  "": {
    domain: "js-text-analysis",
    lang: "de",
    plural_forms: "nplurals=2; plural=(n != 1);"
  },
  "%1$s of the words contain %2$sover %3$s syllables%4$s, which is less than or equal to the recommended maximum of %5$s.": [
    "%1$s der Wörter enthalten mehr als %3$s Silben%4$s, was weniger oder gleich dem empfohlenen Maximum von %5$s ist."
  ],
  "%1$s of the words contain %2$sover %3$s syllables%4$s, which is more than the recommended maximum of %5$s.": [
    "%1$s der Wörter enthalten mehr als %3$s Silben%4$s, was mehr als das empfohlene Maximum von %5$s ist."
  ],
  "%1$sConsecutive sentences%2$s: The text contains %3$d consecutive sentences starting with the same word. %5$sTry to mix things up%2$s!": [
    "%1$sKonsekutive Sätze%2$s: Der Text enthält %3$d aufeinanderfolgende Sätze, die mit demselben Wort beginnen. %5$sVersuchen Sie, die Dinge zu variieren%2$s!",
    "%1$sKonsekutive Sätze%2$s: Der Text enthält %4$d Fälle, in denen %3$d oder mehr aufeinanderfolgende Sätze mit demselben Wort beginnen. %5$sVersuchen Sie, die Dinge zu variieren%2$s!"
  ],
  "%1$sConsecutive sentences%2$s: There is enough variety in your sentences. That's great!": [
    "%1$sKonsekutive Sätze%2$s: Es gibt genug Abwechslung in Ihren Sätzen. Das ist großartig!"
  ],
  "%1$sFlesch Reading Ease%2$s: The copy scores %3$s in the test, which is considered %4$s to read. %5$s": [
    "%1$sFlesch-Lesbarkeitsindex%2$s: Der Text erreicht %3$s in dem Test, was als %4$s zu lesen gilt. %5$s"
  ],
  "%1$sFlesch Reading Ease%2$s: The copy scores %3$s in the test, which is considered %4$s to read. %5$s%6$s%7$s": [
    "%1$sFlesch-Lesbarkeitsindex%2$s: Der Text erreicht %3$s in dem Test, was als %4$s zu lesen gilt. %5$s%6$s%7$s"
  ],
  '%1$sFunction words in keyphrase%3$s: Your keyphrase "%4$s" contains function words only. %2$sLearn more about what makes a good keyphrase.%3$s': [
    '%1$sFunktionswörter in der Keyphrase%3$s: Ihre Keyphrase "%4$s" enthält nur Funktionswörter. %2$sErfahren Sie mehr darüber, was eine gute Keyphrase ausmacht.%3$s'
  ],
  "%1$sImage alt attributes%2$s: Good job!": [
    "%1$sAlt-Attribute von Bildern%2$s: Gute Arbeit!"
  ],
  "%1$sImage alt attributes%3$s: Images on this page do not have alt attributes that reflect the topic of your text. %2$sAdd your keyphrase or synonyms to the alt tags of relevant images%3$s!": [
    "%1$sAlt-Attribute von Bildern%3$s: Bilder auf dieser Seite haben keine Alt-Attribute, die das Thema Ihres Textes widerspiegeln. %2$sFügen Sie Ihre Keyphrase oder Synonyme den Alt-Tags relevanter Bilder hinzu%3$s!"
  ],
  "%1$sImage alt attributes%3$s: Images on this page have alt attributes, but you have not set your keyphrase. %2$sFix that%3$s!": [
    "%1$sAlt-Attribute von Bildern%3$s: Bilder auf dieser Seite haben Alt-Attribute, aber Sie haben Ihre Keyphrase nicht festgelegt. %2$sAnpassung empfohlen%3$s!"
  ],
  "%1$sImage alt attributes%3$s: No images appear on this page. %2$sAdd some%3$s!": [
    "%1$sAlt-Attribute von Bildern%3$s: Auf dieser Seite erscheinen keine Bilder. %2$sFügen Sie welche hinzu%3$s!"
  ],
  "%1$sInternal links%2$s: There are both nofollowed and normal internal links on this page. Good job!": [
    "%1$sInterne Links%2$s: Auf dieser Seite gibt es sowohl nofollow als auch normale interne Links. Gute Arbeit!"
  ],
  "%1$sInternal links%2$s: You have enough internal links. Good job!": [
    "%1$sInterne Links%2$s: Sie haben genügend interne Links. Gute Arbeit!"
  ],
  "%1$sInternal links%3$s: No internal links appear in this page, %2$smake sure to add some%3$s!": [
    "%1$sInterne Links%3$s: Auf dieser Seite erscheinen keine internen Links, %2$sstellen Sie sicher, welche hinzuzufügen%3$s!"
  ],
  "%1$sInternal links%3$s: The internal links in this page are all nofollowed. %2$sAdd some good internal links%3$s.": [
    "%1$sInterne Links%3$s: Die internen Links auf dieser Seite sind alle mit nofollow versehen. %2$sFügen Sie einige gute interne Links hinzu%3$s."
  ],
  "%1$sKeyphrase density%2$s: The focus keyphrase was found %3$d time. This is great!": [
    "%1$sKeyphrase-Dichte%2$s: Die Fokus-Keyphrase wurde %3$d Mal gefunden. Das ist großartig!",
    "%1$sKeyphrase-Dichte%2$s: Die Fokus-Keyphrase wurde %3$d Mal gefunden. Das ist großartig!"
  ],
  "%1$sKeyphrase density%2$s: The focus keyphrase was found %5$d time. That's less than the recommended minimum of %3$d times for a text of this length. %4$sFocus on your keyphrase%2$s!": [
    "%1$sKeyphrase-Dichte%2$s: Die Fokus-Keyphrase wurde %5$d Mal gefunden. Das ist weniger als das empfohlene Minimum von %3$d Mal für einen Text dieser Länge. %4$sKonzentrieren Sie sich auf Ihre Keyphrase%2$s!",
    "%1$sKeyphrase-Dichte%2$s: Die Fokus-Keyphrase wurde %5$d Mal gefunden. Das ist weniger als das empfohlene Minimum von %3$d Mal für einen Text dieser Länge. %4$sKonzentrieren Sie sich auf Ihre Keyphrase%2$s!"
  ],
  "%1$sKeyphrase density%2$s: The focus keyphrase was found %5$d time. That's more than the recommended maximum of %3$d times for a text of this length. %4$sDon't overoptimize%2$s!": [
    "%1$sKeyphrase-Dichte%2$s: Die Fokus-Keyphrase wurde %5$d Mal gefunden. Das ist mehr als das empfohlene Maximum von %3$d Mal für einen Text dieser Länge. %4$sÜberoptimieren Sie nicht%2$s!",
    "%1$sKeyphrase-Dichte%2$s: Die Fokus-Keyphrase wurde %5$d Mal gefunden. Das ist mehr als das empfohlene Maximum von %3$d Mal für einen Text dieser Länge. %4$sÜberoptimieren Sie nicht%2$s!"
  ],
  "%1$sKeyphrase density%2$s: The focus keyphrase was found %5$d time. That's way more than the recommended maximum of %3$d times for a text of this length. %4$sDon't overoptimize%2$s!": [
    "%1$sKeyphrase-Dichte%2$s: Die Fokus-Keyphrase wurde %5$d Mal gefunden. Das ist weit mehr als das empfohlene Maximum von %3$d Mal für einen Text dieser Länge. %4$sÜberoptimieren Sie nicht%2$s!",
    "%1$sKeyphrase-Dichte%2$s: Die Fokus-Keyphrase wurde %5$d Mal gefunden. Das ist weit mehr als das empfohlene Maximum von %3$d Mal für einen Text dieser Länge. %4$sÜberoptimieren Sie nicht%2$s!"
  ],
  "%1$sKeyphrase density%2$s: The focus keyphrase was found 0 times. That's less than the recommended minimum of %3$d times for a text of this length. %4$sFocus on your keyphrase%2$s!": [
    "%1$sKeyphrase-Dichte%2$s: Die Fokus-Keyphrase wurde 0 Mal gefunden. Das ist weniger als das empfohlene Minimum von %3$d Mal für einen Text dieser Länge. %4$sKonzentrieren Sie sich auf Ihre Keyphrase%2$s!"
  ],
  "%1$sKeyphrase distribution%2$s: Good job!": [
    "%1$sVerteilung der Keyphrase%2$s: Gute Arbeit!"
  ],
  "%1$sKeyphrase distribution%3$s: %2$sInclude your keyphrase or its synonyms in the text so that we can check keyphrase distribution%3$s.": [
    "%1$sVerteilung der Keyphrase%3$s: %2$sFügen Sie Ihre Keyphrase oder deren Synonyme in den Text ein, damit wir die Verteilung der Keyphrase überprüfen können%3$s."
  ],
  "%1$sKeyphrase distribution%3$s: Uneven. Some parts of your text do not contain the keyphrase or its synonyms. %2$sDistribute them more evenly%3$s.": [
    "%1$sVerteilung der Keyphrase%3$s: Ungleiche Verteilung. Einige Teile Ihres Textes enthalten die Keyphrase oder deren Synonyme nicht. %2$sVerteilen Sie sie gleichmäßiger%3$s."
  ],
  "%1$sKeyphrase distribution%3$s: Very uneven. Large parts of your text do not contain the keyphrase or its synonyms. %2$sDistribute them more evenly%3$s.": [
    "%1$sVerteilung der Keyphrase%3$s: Sehr ungleiche Verteilung. Große Teile Ihres Textes enthalten die Keyphrase oder deren Synonyme nicht. %2$sVerteilen Sie sie gleichmäßiger%3$s."
  ],
  "%1$sKeyphrase in introduction%2$s: Well done!": [
    "%1$sKeyphrase in der Einleitung%2$s: Gut gemacht!"
  ],
  "%1$sKeyphrase in introduction%3$s: Your keyphrase or its synonyms do not appear in the first paragraph. %2$sMake sure the topic is clear immediately%3$s.": [
    "%1$sKeyphrase in der Einleitung%3$s: Ihre Keyphrase oder deren Synonyme erscheinen nicht im ersten Absatz. %2$sStellen Sie sicher, dass das Thema sofort klar ist%3$s."
  ],
  "%1$sKeyphrase in introduction%3$s:Your keyphrase or its synonyms appear in the first paragraph of the copy, but not within one sentence. %2$sFix that%3$s!": [
    "%1$sKeyphrase in der Einleitung%3$s: Ihre Keyphrase oder deren Synonyme erscheinen im ersten Absatz des Textes, aber nicht innerhalb eines Satzes. %2$sAnpassung empfohlen%3$s!"
  ],
  "%1$sKeyphrase in meta description%2$s: Keyphrase or synonym appear in the meta description. Well done!": [
    "%1$sKeyphrase in der Meta-Beschreibung%2$s: Keyphrase oder Synonym erscheinen in der Meta-Beschreibung. Gut gemacht!"
  ],
  "%1$sKeyphrase in meta description%2$s: The meta description contains the keyphrase %3$s times, which is over the advised maximum of 2 times. %4$sLimit that%5$s!": [
    "%1$sKeyphrase in der Meta-Beschreibung%2$s: Die Meta-Beschreibung enthält die Keyphrase %3$s Mal, was über dem empfohlenen Maximum von 2 Mal liegt. %4$sBegrenzung empfohlen%5$s!"
  ],
  "%1$sKeyphrase in meta description%2$s: The meta description has been specified, but it does not contain the keyphrase. %3$sFix that%4$s!": [
    "%1$sKeyphrase in der Meta-Beschreibung%2$s: Die Meta-Beschreibung wurde angegeben, enthält aber nicht die Keyphrase. %3$sAnpassung empfohlen%4$s!"
  ],
  "%1$sKeyphrase in slug%2$s: Great work!": [
    "%1$sKeyphrase im Slug%2$s: Großartige Arbeit!"
  ],
  "%1$sKeyphrase in slug%2$s: More than half of your keyphrase appears in the slug. That's great!": [
    "%1$sKeyphrase im Slug%2$s: Mehr als die Hälfte Ihrer Keyphrase erscheint im Slug. Das ist großartig!"
  ],
  "%1$sKeyphrase in slug%3$s: (Part of) your keyphrase does not appear in the slug. %2$sChange that%3$s!": [
    "%1$sKeyphrase im Slug%3$s: (Ein Teil) Ihrer Keyphrase erscheint nicht im Slug. %2$sAnpassung empfohlen%3$s!"
  ],
  "%1$sKeyphrase in subheading%2$s: %3$s of your H2 and H3 subheadings reflects the topic of your copy. Good job!": [
    "%1$sKeyphrase in Zwischenüberschriften%2$s: %3$s Ihrer H2- und H3-Zwischenüberschriften spiegeln das Thema Ihres Textes wider. Gute Arbeit!",
    "%1$sKeyphrase in Zwischenüberschriften%2$s: %3$s Ihrer H2- und H3-Zwischenüberschriften spiegeln das Thema Ihres Textes wider. Gute Arbeit!"
  ],
  "%1$sKeyphrase in subheading%2$s: Your H2 or H3 subheading reflects the topic of your copy. Good job!": [
    "%1$sKeyphrase in Zwischenüberschriften%2$s: Ihre H2- oder H3-Zwischenüberschrift spiegelt das Thema Ihres Textes wider. Gute Arbeit!"
  ],
  "%1$sKeyphrase in subheading%3$s: %2$sUse more keyphrases or synonyms in your H2 and H3 subheadings%3$s!": [
    "%1$sKeyphrase in Zwischenüberschriften%3$s: %2$sVerwenden Sie mehr Keyphrasen oder Synonyme in Ihren H2- und H3-Zwischenüberschriften%3$s!"
  ],
  "%1$sKeyphrase in subheading%3$s: More than 75%% of your H2 and H3 subheadings reflect the topic of your copy. That's too much. %2$sDon't over-optimize%3$s!": [
    "%1$sKeyphrase in Zwischenüberschriften%3$s: Mehr als 75%% Ihrer H2- und H3-Zwischenüberschriften spiegeln das Thema Ihres Textes wider. Das ist zu viel. %2$sÜberoptimieren Sie nicht%3$s!"
  ],
  "%1$sKeyphrase in title%2$s: The exact match of the focus keyphrase appears at the beginning of the SEO title. Good job!": [
    "%1$sKeyphrase im Titel%2$s: Die exakte Übereinstimmung der Fokus-Keyphrase erscheint am Anfang des SEO-Titels. Gute Arbeit!"
  ],
  "%1$sKeyphrase in title%3$s: Does not contain the exact match. %2$sTry to write the exact match of your keyphrase in the SEO title and put it at the beginning of the title%3$s.": [
    "%1$sKeyphrase im Titel%3$s: Enthält nicht die exakte Übereinstimmung. %2$sVersuchen Sie, die exakte Übereinstimmung Ihrer Keyphrase im SEO-Titel zu schreiben und setzen Sie sie an den Anfang des Titels%3$s."
  ],
  '%1$sKeyphrase in title%3$s: Not all the words from your keyphrase "%4$s" appear in the SEO title. %2$sFor the best SEO results write the exact match of your keyphrase in the SEO title, and put the keyphrase at the beginning of the title%3$s.': [
    '%1$sKeyphrase im Titel%3$s: Nicht alle Wörter Ihrer Keyphrase "%4$s" erscheinen im SEO-Titel. %2$sFür die besten SEO-Ergebnisse schreiben Sie die exakte Übereinstimmung Ihrer Keyphrase im SEO-Titel und setzen Sie die Keyphrase an den Anfang des Titels%3$s.'
  ],
  "%1$sKeyphrase in title%3$s: The exact match of the focus keyphrase appears in the SEO title, but not at the beginning. %2$sMove it to the beginning for the best results%3$s.": [
    "%1$sKeyphrase im Titel%3$s: Die exakte Übereinstimmung der Fokus-Keyphrase erscheint im SEO-Titel, aber nicht am Anfang. %2$sVerschieben Sie sie an den Anfang für die besten Ergebnisse%3$s."
  ],
  "%1$sKeyphrase length%2$s: Good job!": [
    "%1$sLänge der Keyphrase%2$s: Gute Arbeit!"
  ],
  "%1$sKeyphrase length%3$s: %2$sSet a keyphrase in order to calculate your SEO score%3$s.": [
    "%1$sLänge der Keyphrase%3$s: %2$sLegen Sie eine Keyphrase fest, um Ihren SEO-Score zu berechnen%3$s."
  ],
  "%1$sKeyphrase length%3$s: No focus keyphrase was set for this page. %2$sSet a keyphrase in order to calculate your SEO score%3$s.": [
    "%1$sLänge der Keyphrase%3$s: Für diese Seite wurde keine Fokus-Keyphrase festgelegt. %2$sLegen Sie eine Keyphrase fest, um Ihren SEO-Score zu berechnen%3$s."
  ],
  "%1$sLink keyphrase%3$s: You're linking to another page with the words you want this page to rank for. %2$sDon't do that%3$s!": [
    "%1$sLink-Keyphrase%3$s: Sie verlinken auf eine andere Seite mit den Wörtern, für die diese Seite ranken soll. %2$sTun Sie das nicht%3$s!"
  ],
  "%1$sMeta description length%2$s: Well done!": [
    "%1$sLänge der Meta-Beschreibung%2$s: Gut gemacht!"
  ],
  "%1$sMeta description length%3$s: No meta description has been specified. Search engines will display copy from the page instead. %2$sMake sure to write one%3$s!": [
    "%1$sLänge der Meta-Beschreibung%3$s: Es wurde keine Meta-Beschreibung angegeben. Suchmaschinen werden stattdessen Text von der Seite anzeigen. %2$sStellen Sie sicher, dass Sie eine schreiben%3$s!"
  ],
  "%1$sMeta description length%3$s: The meta description is over %4$d characters. To ensure the entire description will be visible, %2$syou should reduce the length%3$s!": [
    "%1$sLänge der Meta-Beschreibung%3$s: Die Meta-Beschreibung ist länger als %4$d Zeichen. Um sicherzustellen, dass die gesamte Beschreibung sichtbar ist, %2$ssollten Sie die Länge reduzieren%3$s!"
  ],
  "%1$sMeta description length%3$s: The meta description is too short (under %4$d characters). Up to %5$d characters are available. %2$sUse the space%3$s!": [
    "%1$sLänge der Meta-Beschreibung%3$s: Die Meta-Beschreibung ist zu kurz (unter %4$d Zeichen). Bis zu %5$d Zeichen sind verfügbar. %2$sNutzen Sie den Platz%3$s!"
  ],
  "%1$sNot enough content%2$s: %3$sPlease add some content to enable a good analysis%2$s.": [
    "%1$sNicht genug Inhalt%2$s: %3$sBitte fügen Sie etwas Inhalt hinzu, um eine gute Analyse zu ermöglichen%2$s."
  ],
  "%1$sOutbound links%2$s: Good job!": [
    "%1$sAusgehende Links%2$s: Gute Arbeit!"
  ],
  "%1$sOutbound links%2$s: There are both nofollowed and normal outbound links on this page. Good job!": [
    "%1$sAusgehende Links%2$s: Auf dieser Seite gibt es sowohl nofollow als auch normale ausgehende Links. Gute Arbeit!"
  ],
  "%1$sOutbound links%3$s: All outbound links on this page are nofollowed. %2$sAdd some normal links%3$s.": [
    "%1$sAusgehende Links%3$s: Alle ausgehenden Links auf dieser Seite sind mit nofollow versehen. %2$sFügen Sie einige normale Links hinzu%3$s."
  ],
  "%1$sOutbound links%3$s: No outbound links appear in this page. %2$sAdd some%3$s!": [
    "%1$sAusgehende Links%3$s: Auf dieser Seite erscheinen keine ausgehenden Links. %2$sFügen Sie welche hinzu%3$s!"
  ],
  "%1$sParagraph length%2$s: %3$d of the paragraphs contains more than the recommended maximum of %4$d words. %5$sShorten your paragraphs%2$s!": [
    "%1$sAbsatzlänge%2$s: %3$d der Absätze enthalten mehr als das empfohlene Maximum von %4$d Wörtern. %5$sKürzen Sie Ihre Absätze%2$s!",
    "%1$sAbsatzlänge%2$s: %3$d der Absätze enthalten mehr als das empfohlene Maximum von %4$d Wörtern. %5$sKürzen Sie Ihre Absätze%2$s!"
  ],
  "%1$sParagraph length%2$s: None of the paragraphs are too long. Great job!": [
    "%1$sAbsatzlänge%2$s: Keiner der Absätze ist zu lang. Großartige Arbeit!"
  ],
  "%1$sPassive voice%2$s: %3$s of the sentences contain passive voice, which is more than the recommended maximum of %4$s. %5$sTry to use their active counterparts%2$s.": [
    "%1$sPassivkonstruktionen%2$s: %3$s der Sätze enthalten Passivkonstruktionen, was mehr als das empfohlene Maximum von %4$s ist. %5$sVersuchen Sie, aktive Formulierungen zu verwenden%2$s."
  ],
  "%1$sPassive voice%2$s: You're using enough active voice. That's great!": [
    "%1$sPassivkonstruktionen%2$s: Sie verwenden ausreichend aktive Formulierungen. Das ist großartig!"
  ],
  "%1$sPreviously used keyphrase%2$s: You've not used this keyphrase before, very good.": [
    "%1$sBereits verwendete Keyphrase%2$s: Sie haben diese Keyphrase zuvor noch nicht verwendet, sehr gut."
  ],
  "%1$sSentence length%2$s: %3$s of the sentences contain more than %4$s words, which is more than the recommended maximum of %5$s. %6$sTry to shorten the sentences%2$s.": [
    "%1$sSatzlänge%2$s: %3$s der Sätze enthalten mehr als %4$s Wörter, was mehr als das empfohlene Maximum von %5$s ist. %6$sVersuchen Sie, die Sätze zu kürzen%2$s."
  ],
  "%1$sSentence length%2$s: Great!": [
    "%1$sSatzlänge%2$s: Großartig!"
  ],
  "%1$sSEO title width%2$s: Good job!": [
    "%1$sSEO-Titelbreite%2$s: Gute Arbeit!"
  ],
  "%1$sSEO title width%3$s: %2$sPlease create an SEO title%3$s.": [
    "%1$sSEO-Titelbreite%3$s: %2$sBitte erstellen Sie einen SEO-Titel%3$s."
  ],
  "%1$sSEO title width%3$s: The SEO title is too short. %2$sUse the space to add keyphrase variations or create compelling call-to-action copy%3$s.": [
    "%1$sSEO-Titelbreite%3$s: Der SEO-Titel ist zu kurz. %2$sNutzen Sie den Platz, um Variationen der Keyphrase hinzuzufügen oder überzeugende Handlungsaufforderungen zu erstellen%3$s."
  ],
  "%1$sSEO title width%3$s: The SEO title is wider than the viewable limit. %2$sTry to make it shorter%3$s.": [
    "%1$sSEO-Titelbreite%3$s: Der SEO-Titel ist breiter als das sichtbare Limit. %2$sVersuchen Sie, ihn kürzer zu machen%3$s."
  ],
  "%1$sSingle title%3$s: H1s should only be used as your main title. Find all H1s in your text that aren't your main title and %2$schange them to a lower heading level%3$s!": [
    "%1$sEinzelner Titel%3$s: H1s sollten nur als Ihr Haupttitel verwendet werden. Finden Sie alle H1s in Ihrem Text, die nicht Ihr Haupttitel sind, und %2$sändern Sie sie in eine niedrigere Überschriftenebene%3$s!"
  ],
  "%1$sSlug stopwords%3$s: The slug for this page contains a stop word. %2$sRemove it%3$s!": [
    "%1$sSlug-Stopwörter%3$s: Der Slug für diese Seite enthält ein Stopwort. %2$sEntfernen Sie es%3$s!",
    "%1$sSlug-Stopwörter%3$s: Der Slug für diese Seite enthält Stopwörter. %2$sEntfernen Sie sie%3$s!"
  ],
  "%1$sSlug too long%3$s: the slug for this page is a bit long. %2$sShorten it%3$s!": [
    "%1$sSlug zu lang%3$s: Der Slug für diese Seite ist etwas zu lang. %2$sKürzen Sie ihn%3$s!"
  ],
  "%1$sStopwords%3$s: The keyphrase contains stop words. This may or may not be wise depending on the circumstances. %2$sLearn more about stop words%3$s.": [
    "%1$sStopwörter%3$s: Die Keyphrase enthält Stopwörter. Dies kann je nach Umständen klug oder nicht klug sein. %2$sErfahren Sie mehr über Stopwörter%3$s."
  ],
  "%1$sSubheading distribution%2$s: %3$d section of your text is longer than %4$d words and is not separated by any subheadings. %5$sAdd subheadings to improve readability%2$s.": [
    "%1$sVerteilung der Zwischenüberschriften%2$s: %3$d Abschnitt Ihres Textes ist länger als %4$d Wörter und wird durch keine Zwischenüberschriften getrennt. %5$sFügen Sie Zwischenüberschriften hinzu, um die Lesbarkeit zu verbessern%2$s.",
    "%1$sVerteilung der Zwischenüberschriften%2$s: %3$d Abschnitte Ihres Textes sind länger als %4$d Wörter und werden durch keine Zwischenüberschriften getrennt. %5$sFügen Sie Zwischenüberschriften hinzu, um die Lesbarkeit zu verbessern%2$s."
  ],
  "%1$sSubheading distribution%2$s: Great job!": [
    "%1$sVerteilung der Zwischenüberschriften%2$s: Gute Arbeit!"
  ],
  "%1$sSubheading distribution%2$s: You are not using any subheadings, although your text is rather long. %3$sTry and add some subheadings%2$s.": [
    "%1$sVerteilung der Zwischenüberschriften%2$s: Sie verwenden keine Zwischenüberschriften, obwohl Ihr Text ziemlich lang ist. %3$sVersuchen Sie, einige Zwischenüberschriften hinzuzufügen%2$s."
  ],
  "%1$sSubheading distribution%2$s: You are not using any subheadings, but your text is short enough and probably doesn't need them.": [
    "%1$sVerteilung der Zwischenüberschriften%2$s: Sie verwenden keine Zwischenüberschriften, aber Ihr Text ist kurz genug und benötigt sie wahrscheinlich nicht."
  ],
  "%1$sTransition words%2$s: None of the sentences contain transition words. %3$sUse some%2$s.": [
    "%1$sÜbergangswörter%2$s: Keiner der Sätze enthält Übergangswörter. %3$sVerwenden Sie welche%2$s."
  ],
  "%1$sTransition words%2$s: Only %3$s of the sentences contain transition words, which is not enough. %4$sUse more of them%2$s.": [
    "%1$sÜbergangswörter%2$s: Nur %3$s der Sätze enthalten Übergangswörter, was nicht ausreicht. %4$sVerwenden Sie mehr davon%2$s."
  ],
  "%1$sTransition words%2$s: Well done!": [
    "%1$sÜbergangswörter%2$s: Gut gemacht!"
  ],
  "%2$sText length%3$s: The text contains %1$d word. Good job!": [
    "%2$sTextlänge%3$s: Der Text enthält %1$d Wort. Gute Arbeit!",
    "%2$sTextlänge%3$s: Der Text enthält %1$d Wörter. Gute Arbeit!"
  ],
  "%2$sText length%4$s: The text contains %1$d word.": [
    "%2$sTextlänge%4$s: Der Text enthält %1$d Wort.",
    "%2$sTextlänge%4$s: Der Text enthält %1$d Wörter."
  ],
  "%3$sImage alt attributes%5$s: Out of %2$d images on this page, %1$d have alt attributes with words from your keyphrase or synonyms. That's a bit much. %4$sOnly include the keyphrase or its synonyms when it really fits the image%5$s.": [
    "%3$sAlt-Attribute von Bildern%5$s: Von %2$d Bildern auf dieser Seite haben %1$d Alt-Attribute mit Wörtern aus Ihrer Keyphrase oder Synonymen. Das ist ein bisschen viel. %4$sFügen Sie die Keyphrase oder deren Synonyme nur dann ein, wenn sie wirklich zum Bild passen%5$s."
  ],
  "%3$sImage alt attributes%5$s: Out of %2$d images on this page, only %1$d has an alt attribute that reflects the topic of your text. %4$sAdd your keyphrase or synonyms to the alt tags of more relevant images%5$s!": [
    "%3$sAlt-Attribute von Bildern%5$s: Von %2$d Bildern auf dieser Seite hat nur %1$d ein Alt-Attribut, das das Thema Ihres Textes widerspiegelt. %4$sFügen Sie Ihre Keyphrase oder Synonyme den Alt-Tags relevanterer Bilder hinzu%5$s!",
    "%3$sAlt-Attribute von Bildern%5$s: Von %2$d Bild auf dieser Seite haben nur %1$d Alt-Attribute, die das Thema Ihres Textes widerspiegeln. %4$sFügen Sie Ihre Keyphrase oder Synonyme den Alt-Tags relevanterer Bilder hinzu%5$s!"
  ],
  "%3$sKeyphrase length%5$s: The keyphrase is %1$d words long. That's more than the recommended maximum of %2$d words. %4$sMake it shorter%5$s!": [
    "%3$sLänge der Keyphrase%5$s: Die Keyphrase ist %1$d Wörter lang. Das ist mehr als das empfohlene Maximum von %2$d Wörtern. %4$sMachen Sie sie kürzer%5$s!"
  ],
  "%3$sKeyphrase length%5$s: The keyphrase is %1$d words long. That's way more than the recommended maximum of %2$d words. %4$sMake it shorter%5$s!": [
    "%3$sLänge der Keyphrase%5$s: Die Keyphrase ist %1$d Wörter lang. Das ist weit mehr als das empfohlene Maximum von %2$d Wörtern. %4$sMachen Sie sie kürzer%5$s!"
  ],
  "%3$sPreviously used keyphrase%5$s: You've used this keyphrase %1$sonce before%2$s. %4$sDo not use your keyphrase more than once%5$s.": [
    "%3$sBereits verwendete Keyphrase%5$s: Sie haben diese Keyphrase %1$seinmal zuvor verwendet%2$s. %4$sVerwenden Sie Ihre Keyphrase nicht mehr als einmal%5$s."
  ],
  "%4$sPreviously used keyphrase%6$s: You've used this keyphrase %1$s%2$d times before%3$s. %5$sDo not use your keyphrase more than once%6$s.": [
    "%4$sBereits verwendete Keyphrase%6$s: Sie haben diese Keyphrase %1$s%2$d Mal zuvor verwendet%3$s. %5$sVerwenden Sie Ihre Keyphrase nicht mehr als einmal%6$s."
  ],
  "An error occurred in the '%1$s' assessment": [
    "Ein Fehler ist bei der '%1$s'-Bewertung aufgetreten"
  ],
  "Close snippet editor": [
    "Snippet-Editor schließen"
  ],
  "Content optimization:": [
    "Inhaltsoptimierung:"
  ],
  "Desktop preview": [
    "Desktop-Vorschau"
  ],
  difficult: e,
  easy: s,
  "Edit snippet": [
    "Snippet bearbeiten"
  ],
  "fairly difficult": [
    "ziemlich schwierig"
  ],
  "fairly easy": [
    "ziemlich leicht"
  ],
  Feedback: n,
  Good: t,
  "Good job!": [
    "Gute Arbeit!"
  ],
  "Good SEO score": [
    "Guter SEO-Score"
  ],
  "Google preview": [
    "Google-Vorschau"
  ],
  "Has feedback": [
    "Hat Feedback"
  ],
  "Mark this result in the text": [
    "Markieren Sie dieses Ergebnis im Text"
  ],
  "Marks are disabled in current view": [
    "Markierungen sind in der aktuellen Ansicht deaktiviert"
  ],
  "Meta description": [
    "Meta-Beschreibung"
  ],
  "Meta description preview:": [
    "Vorschau der Meta-Beschreibung:"
  ],
  "Mobile preview": [
    "Mobile Vorschau"
  ],
  "Needs improvement": [
    "Bedarf Verbesserung"
  ],
  ok: i,
  OK: r,
  "OK SEO score": [
    "OK SEO-Score"
  ],
  "Please provide a meta description by editing the snippet below.": [
    "Bitte geben Sie eine Meta-Beschreibung an, indem Sie das untenstehende Snippet bearbeiten."
  ],
  "Please provide an SEO title by editing the snippet below.": [
    "Bitte geben Sie einen SEO-Titel an, indem Sie das untenstehende Snippet bearbeiten."
  ],
  "Remove marks in the text": [
    "Markierungen im Text entfernen"
  ],
  "Scroll to see the preview content.": [
    "Scrollen, um den Vorschauintalt zu sehen."
  ],
  "SEO title": [
    "SEO-Titel"
  ],
  "SEO title preview:": [
    "SEO-Titel Vorschau:"
  ],
  Slug: a,
  "Slug preview:": [
    "Slug-Vorschau:"
  ],
  "The meta description contains %1$d sentence %2$sover %3$s words%4$s. Try to shorten this sentence.": [
    "Die Meta-Beschreibung enthält %1$d Satz %2$smit mehr als %3$s Wörtern%4$s. Versuchen Sie, diesen Satz zu kürzen.",
    "Die Meta-Beschreibung enthält %1$d Sätze %2$smit mehr als %3$s Wörtern%4$s. Versuchen Sie, diese Sätze zu kürzen."
  ],
  "The meta description contains no sentences %1$sover %2$s words%3$s.": [
    "Die Meta-Beschreibung enthält keine Sätze %1$smit mehr als %2$s Wörtern%3$s."
  ],
  "This is below the recommended minimum of %5$d word. %3$sAdd more content%4$s.": [
    "Dies liegt unter dem empfohlenen Minimum von %5$d Wort. %3$sFügen Sie mehr Inhalt hinzu%4$s.",
    "Dies liegt unter dem empfohlenen Minimum von %5$d Wörtern. %3$sFügen Sie mehr Inhalt hinzu%4$s."
  ],
  "This is far below the recommended minimum of %5$d word. %3$sAdd more content%4$s.": [
    "Dies liegt weit unter dem empfohlenen Minimum von %5$d Wort. %3$sFügen Sie mehr Inhalt hinzu%4$s.",
    "Dies liegt weit unter dem empfohlenen Minimum von %5$d Wörtern. %3$sFügen Sie mehr Inhalt hinzu%4$s."
  ],
  "This is slightly below the recommended minimum of %5$d word. %3$sAdd a bit more copy%4$s.": [
    "Dies liegt leicht unter dem empfohlenen Minimum von %5$d Wort. %3$sFügen Sie ein wenig mehr Text hinzu%4$s.",
    "Dies liegt leicht unter dem empfohlenen Minimum von %5$d Wörtern. %3$sFügen Sie ein wenig mehr Text hinzu%4$s."
  ],
  "Try to make shorter sentences to improve readability": [
    "Versuchen Sie, kürzere Sätze zu bilden, um die Lesbarkeit zu verbessern"
  ],
  "Try to make shorter sentences, using less difficult words to improve readability": [
    "Versuchen Sie, kürzere Sätze zu verwenden und weniger schwierige Wörter zu nutzen, um die Lesbarkeit zu verbessern"
  ],
  "very difficult": [
    "sehr schwierig"
  ],
  "very easy": [
    "sehr leicht"
  ],
  "You can click on each element in the preview to jump to the Snippet Editor.": [
    "Sie können auf jedes Element in der Vorschau klicken, um zum Snippet-Editor zu gelangen."
  ]
}, o = {
  de: h
};
export {
  o as default
};
