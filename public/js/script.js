// ==================== I18N - ÇOKLU DİL SİSTEMİ ====================
const I18N = {
    tr: {
        // Language names
        lang_tr: "TR",
        lang_en: "EN",
        lang_de: "DE",
        lang_es: "ES",
        lang_ar: "AR",
        
        // Header
        subtitle: "Her gün yeni bir meydan okuma. Bilgini sına, zirveye tırman!",
        
                hint_starts_with: "Baş harf",
        hint_words: "Kelime",
        hint_letters: "Harf",
        hint_shuffle: "Karıştırılmış",
// Mode Titles
        classic_title: "KLASİK",
        classic_desc: "İstatistiklere bakarak item'ı tahmin et",
        visual_title: "GÖRSEL",
        visual_desc: "Yakın çekimden item veya haritayı tanı",
        emoji_title: "EMOJİ",
        emoji_desc: "Emoji ipuçlarından item'ı tahmin et",
        audio_title: "SES",
        audio_desc: "Ses efektini dinleyerek item'ı bul",
        
        // UI Elements
        back_text: "Menü",
        input_placeholder: "Bir isim yaz...",
        
        // Table Headers
        header_item: "EŞYA",
        header_type: "TÜRÜ",
        header_range: "MENZİL",
        header_sp: "SP?",
        header_year: "YIL",
        
        // Stats
        label_played: "Oynanan",
        label_wins: "Kazanılan",
        label_winrate: "Oran",
        label_best: "En İyi",
        
        // Win Screen
        win_title: "TEBRİKLER!",
        win_text: "Doğru cevap:",
        win_attempts: "Deneme:",
        next_mode: "Sıradaki Mod",
        
        // Leaderboard
        lb_title: "Liderlik Tablosu",
        lb_subtitle: "Bugünün en iyileri",
        lb_global: "Global",
        lb_classic: "Klasik",
        lb_visual: "Görsel",
        lb_emoji: "Emoji",
        lb_audio: "Ses",
        lb_today: "Bugün",
        lb_alltime: "Tüm Zamanlar",
        lb_ingame_title: "Bu Modun Liderleri",
        lb_empty: "Henüz kimse oynamadı",
        lb_loading: "Yükleniyor...",
        lb_error: "Yüklenemedi",
        lb_pts: "puan",
        lb_mode: "mod",
        lb_modes: "mod",
        lb_attempt: "deneme",
        
        // Nickname
        nickname_title: "Tebrikler!",
        nickname_prompt: "Liderlik tablosunda görünmek için bir nickname gir:",
        nickname_placeholder: "Nickname",
        nickname_save: "Kaydet",
        nickname_skip: "Atla",
        
        // Other
        next_game_label: "YENİLEME:",
        remaining_zoom: "Kalan Zoom:",
        audio_play_text: "Ses efektini dinleyerek item'ı bul",
        footer_dev: "Geliştirici:",
        footer_community: "S4 Xero Community",
        
        // Notifications
        notif_saved: "Skorun liderlik tablosuna kaydedildi! 🏆",
        notif_duplicate: "Bu modu bugün zaten oynadın!",
        notif_error: "Skor kaydedilemedi. İnternet bağlantınızı kontrol edin.",
        score_save_failed: "Skor kaydı başarısız.",
        register_failed: "Kayıt başarısız. İnternet bağlantını kontrol et.",
        login_failed: "Giriş başarısız. İnternet bağlantını kontrol et.",
        toast_success: "Başarılı",
        toast_error: "Hata",
        toast_warning: "Uyarı",
        toast_info: "Bilgi",
        
        // YENİ
        coming_soon: "Yakında",
        mode_coming_soon: "Bu mod yakında aktif olacak!",
        tutorial_classic: "Başlamak için bir item ismi yaz",
        hints_title: "İpuçları",
        hints_classic: "İstatistiklere dikkat et",
        hints_visual: "Detaylara odaklan",
        hints_emoji: "Anlamı düşün, tek tek bakma",
        
        // Günün İstatistikleri
        daily_stats_title: "Günün İstatistikleri",
        daily_players: "Oyuncu",
        daily_winners: "Kazanan",
        daily_winrate: "Kazanma",
        daily_avg: "Ort. Deneme",
        
        // Klasik Mod
        total_items: "Toplam Item",
        
        // İpucu Mesajları
        hint_type_match: "Doğru tür",
        hint_range_match: "Doğru menzil",
        hint_year_match: "Doğru yıl",
        hint_attempt_1: "Tür",
        hint_attempt_2: "Menzil",
        hint_attempt_3: "Yıl",
        hint_attempt_4: "Özel mi",
        hint_attempt_5: "İlk harf",
        hint_attempt_6: "İlk 3 harf",
        unknown: "Bilinmiyor",
        normal_item: "Normal item",
        hint_emoji_1: "Tür",
        hint_emoji_2: "Menzil",
        hint_emoji_3: "Yıl",
        hint_emoji_4: "Özellik",
        hint_emoji_5: "İlk harf",
        hint_emoji_6: "İlk harfler",
        hint_audio_1: "Tür ipucu",
        hint_audio_2: "Menzil ipucu",
        hint_audio_3: "Yıl ipucu",
        hint_general: "Daha dikkatli dinle",
        
        // Classic Progressive Hints
        classic_hints_title: "Kademeli İpuçları",
        hint_locked: "Kilitli (daha fazla tahmin gerekli)",
        hint_a_label: "Kategori",
        hint_b_label: "Çıkış Dönemi",
        hint_c_label: "İstatistikler",
        hint_d_label: "Benzer Özellik",
        hint_missing: "Veri yok",
        hint_unlocked_at: "tahmin sonra açılır",
        hint_length: "Harf Sayısı",
        hint_mask: "Maske",
        
        // Player Profile
        profile_title: "Oyuncu Profili",
        profile_guest: "Misafir",
        profile_code_hidden: "-",
        profile_code_label: "Kodun",
        profile_copy_code: "Kodu Kopyala",
        profile_player_id: "Oyuncu ID",
        
        // Registration/Login
        code_prompt: "4 haneli kodu gir",
        code_invalid: "Geçersiz kod!",
        nickname_taken: "Bu nickname alınmış. Kodunu gir:",
        not_registered: "Önce kayıt olmalısın!",
        save_code_warning: "Bu kodu kaydet! Diğer cihazlarda kullanacaksın:",
        already_registered: "Bu cihaz zaten kayıtlı",
        nick_change_blocked: "Nickname değiştirilemez!",
        nick_change_request: "Nickname değiştirmek mi istiyorsun?",
        forgot_code: "Kodunu mu unuttun?",
        change_pin: "PIN Değiştir",
        current_code: "Mevcut kod",
        new_code: "Yeni 4 haneli kod",
        save_new_pin: "Kaydet",
        pin_changed: "PIN başarıyla değiştirildi!",
        copied: "Kopyalandı",
        wrong_code: "Mevcut kod yanlış",
        invalid_new_code: "Yeni kod 4 haneli sayı olmalı",
        nickname_required: "Nickname gerekli",
        code_required: "Kod gerekli (4 rakam)",
        login_success: "Giriş başarılı!",
        register_success: "Kayıt başarılı!"
    },
    
    en: {
        lang_tr: "TR",
        lang_en: "EN",
        lang_de: "DE",
        lang_es: "ES",
        lang_ar: "AR",
        
        subtitle: "Daily challenge, test your knowledge, climb to the top!",
        
                hint_starts_with: "Starts with",
        hint_words: "Words",
        hint_letters: "Letters",
        hint_shuffle: "Shuffled",
classic_title: "CLASSIC",
        classic_desc: "Guess the item by stats",
        visual_title: "VISUAL",
        visual_desc: "Identify item or map from close-up",
        emoji_title: "EMOJI",
        emoji_desc: "Guess the item from emoji clues",
        audio_title: "AUDIO",
        audio_desc: "Listen and find the item",
        
        back_text: "Menu",
        input_placeholder: "Type a name...",
        
        header_item: "ITEM",
        header_type: "TYPE",
        header_range: "RANGE",
        header_sp: "SP?",
        header_year: "YEAR",
        
        label_played: "Played",
        label_wins: "Won",
        label_winrate: "Rate",
        label_best: "Best",
        
        win_title: "CONGRATULATIONS!",
        win_text: "Correct answer:",
        win_attempts: "Attempts:",
        next_mode: "Next Mode",
        
        lb_title: "Leaderboard",
        lb_subtitle: "Today's best",
        lb_global: "Global",
        lb_classic: "Classic",
        lb_visual: "Visual",
        lb_emoji: "Emoji",
        lb_audio: "Audio",
        lb_today: "Today",
        lb_alltime: "All Time",
        lb_ingame_title: "Top Players",
        lb_empty: "No one has played yet",
        lb_loading: "Loading...",
        lb_error: "Load failed",
        lb_pts: "pts",
        lb_mode: "mode",
        lb_modes: "modes",
        lb_attempt: "attempt",
        
        nickname_title: "Congratulations!",
        nickname_prompt: "Enter a nickname to appear on the leaderboard:",
        nickname_placeholder: "Nickname",
        nickname_save: "Save",
        nickname_skip: "Skip",
        
        next_game_label: "REFRESH:",
        remaining_zoom: "Zoom Left:",
        audio_play_text: "Listen to the sound and guess the item",
        footer_dev: "Developer:",
        footer_community: "S4 Xero Community",
        
        notif_saved: "Score saved to leaderboard! 🏆",
        notif_duplicate: "You've already played this mode today!",
        notif_error: "Score could not be saved. Check your internet connection.",
        score_save_failed: "Score save failed.",
        register_failed: "Registration failed. Check your connection.",
        login_failed: "Login failed. Check your connection.",
        toast_success: "Success",
        toast_error: "Error",
        toast_warning: "Warning",
        toast_info: "Info",
        
        coming_soon: "Coming Soon",
        mode_coming_soon: "This mode will be active soon!",
        tutorial_classic: "Type an item name to start",
        hints_title: "Hints",
        hints_classic: "Pay attention to stats",
        hints_visual: "Focus on details",
        hints_emoji: "Think about meaning",
        
        // Missing keys for EN
        hint_unlocked_at: "guesses to unlock",
        hint_length: "Length",
        hint_mask: "Mask",
        hint_missing: "N/A",
        profile_guest: "Guest",
        profile_code_label: "Your Code",
        profile_copy_code: "Copy Code",
        save_code_warning: "Save this code! You'll need it on other devices:",
        nickname_required: "Nickname required",
        code_required: "Code required (4 digits)",
        login_success: "Login successful!",
        register_success: "Registered successfully!",
        not_registered: "You need to register first!",
        code_invalid: "Invalid code!",
        already_registered: "This device is already registered",
        nick_change_blocked: "Nickname cannot be changed!",
        nick_change_request: "Want to change your nickname?",
        forgot_code: "Forgot your code?",
        change_pin: "Change PIN",
        current_code: "Current code",
        new_code: "New 4-digit code",
        save_new_pin: "Save",
        pin_changed: "PIN changed successfully!",
        copied: "Copied",
        wrong_code: "Current code is wrong",
        invalid_new_code: "New code must be 4 digits",
        classic_hints_title: "Progressive Hints",
        code_prompt: "Enter 4-digit code",
        daily_avg: "Avg. Attempts",
        daily_players: "Players",
        daily_stats_title: "Daily Stats",
        daily_winners: "Winners",
        daily_winrate: "Win Rate",
        hint_a_label: "Category",
        hint_attempt_1: "Type",
        hint_attempt_2: "Range",
        hint_attempt_3: "Year",
        hint_attempt_4: "Special?",
        hint_attempt_5: "First letter",
        hint_attempt_6: "First 3 letters",
        hint_audio_1: "Type hint",
        hint_audio_2: "Range hint",
        hint_audio_3: "Year hint",
        hint_b_label: "Release Period",
        hint_c_label: "Stats",
        hint_d_label: "Similar Feature",
        hint_emoji_1: "Type",
        hint_emoji_2: "Range",
        hint_emoji_3: "Year",
        hint_emoji_4: "Feature",
        hint_emoji_5: "First letter",
        hint_emoji_6: "First letters",
        hint_general: "Listen more carefully",
        hint_locked: "Locked (more guesses needed)",
        hint_range_match: "Correct range",
        hint_type_match: "Correct type",
        hint_year_match: "Correct year",
        nickname_taken: "Nickname taken. Enter your code:",
        normal_item: "Normal item",
        profile_code_hidden: "-",
        profile_player_id: "Player ID",
        profile_title: "Player Profile",
        total_items: "Total Items",
        unknown: "Unknown",
    },
    
    de: {
        lang_tr: "TR",
        lang_en: "EN",
        lang_de: "DE",
        lang_es: "ES",
        lang_ar: "AR",
        
        subtitle: "Tägliche Herausforderung, teste dein Wissen!",
        
                hint_starts_with: "Beginnt mit",
        hint_words: "Wörter",
        hint_letters: "Buchstaben",
        hint_shuffle: "Gemischt",
classic_title: "KLASSISCH",
        classic_desc: "Errate den Gegenstand anhand der Statistiken",
        visual_title: "VISUELL",
        visual_desc: "Identifiziere den Gegenstand aus der Nahaufnahme",
        emoji_title: "EMOJI",
        emoji_desc: "Errate den Gegenstand aus Emoji-Hinweisen",
        audio_title: "AUDIO",
        audio_desc: "Höre zu und finde den Gegenstand",
        
        back_text: "Menü",
        input_placeholder: "Gib einen Namen ein...",
        
        header_item: "GEGENSTAND",
        header_type: "TYP",
        header_range: "REICHWEITE",
        header_sp: "SP?",
        header_year: "JAHR",
        
        label_played: "Gespielt",
        label_wins: "Gewonnen",
        label_winrate: "Rate",
        label_best: "Beste",
        
        win_title: "GLÜCKWUNSCH!",
        win_text: "Richtige Antwort:",
        win_attempts: "Versuche:",
        next_mode: "Nächster Modus",
        
        lb_title: "Bestenliste",
        lb_subtitle: "Die Besten von heute",
        lb_global: "Global",
        lb_classic: "Klassisch",
        lb_visual: "Visuell",
        lb_emoji: "Emoji",
        lb_audio: "Audio",
        lb_today: "Heute",
        lb_alltime: "Alle Zeiten",
        lb_ingame_title: "Top-Spieler",
        lb_empty: "Noch hat niemand gespielt",
        lb_loading: "Lädt...",
        lb_error: "Ladefehler",
        lb_pts: "Pkt",
        lb_mode: "Modus",
        lb_modes: "Modi",
        lb_attempt: "Versuch",
        
        nickname_title: "Glückwunsch!",
        nickname_prompt: "Gib einen Nickname ein:",
        nickname_placeholder: "Nickname",
        nickname_save: "Speichern",
        nickname_skip: "Überspringen",
        
        next_game_label: "AKTUALISIERUNG:",
        remaining_zoom: "Zoom übrig:",
        audio_play_text: "Höre den Ton und errate den Gegenstand",
        footer_dev: "Entwickler:",
        footer_community: "S4 Xero Community",
        
        notif_saved: "Punktzahl gespeichert! 🏆",
        notif_duplicate: "Du hast diesen Modus heute bereits gespielt!",
        notif_error: "Punktzahl konnte nicht gespeichert werden.",
        score_save_failed: "Speichern der Punktzahl fehlgeschlagen.",
        register_failed: "Registrierung fehlgeschlagen. Prüfe deine Verbindung.",
        login_failed: "Login fehlgeschlagen. Prüfe deine Verbindung.",
        toast_success: "Erfolg",
        toast_error: "Fehler",
        toast_warning: "Warnung",
        toast_info: "Info",
        
        coming_soon: "Demnächst",
        mode_coming_soon: "Dieser Modus wird bald aktiv sein!",
        tutorial_classic: "Gib einen Gegenstandsnamen ein",
        hints_title: "Hinweise",
        hints_classic: "Achte auf Statistiken",
        hints_visual: "Fokussiere dich auf Details",
        hints_emoji: "Denke an die Bedeutung",
        already_registered: "Dieses Gerät ist bereits registriert",
        change_pin: "PIN ändern",
        classic_hints_title: "Stufenweise Hinweise",
        code_invalid: "Ungültiger Code!",
        code_prompt: "4-stelligen Code eingeben",
        code_required: "Code erforderlich (4 Ziffern)",
        copied: "Kopiert",
        current_code: "Aktueller Code",
        daily_avg: "Durchschn. Versuche",
        daily_players: "Spieler",
        daily_stats_title: "Tagesstatistiken",
        daily_winners: "Gewinner",
        daily_winrate: "Gewinnrate",
        forgot_code: "Code vergessen?",
        hint_a_label: "Kategorie",
        hint_attempt_1: "Typ",
        hint_attempt_2: "Reichweite",
        hint_attempt_3: "Jahr",
        hint_attempt_4: "Spezial?",
        hint_attempt_5: "Erster Buchstabe",
        hint_attempt_6: "Erste 3 Buchstaben",
        hint_audio_1: "Typ-Hinweis",
        hint_audio_2: "Reichweite-Hinweis",
        hint_audio_3: "Jahr-Hinweis",
        hint_b_label: "Erscheinungszeitraum",
        hint_c_label: "Statistiken",
        hint_d_label: "Ähnliche Eigenschaft",
        hint_emoji_1: "Typ",
        hint_emoji_2: "Reichweite",
        hint_emoji_3: "Jahr",
        hint_emoji_4: "Eigenschaft",
        hint_emoji_5: "Erster Buchstabe",
        hint_emoji_6: "Erste Buchstaben",
        hint_general: "Höre genauer hin",
        hint_length: "Länge",
        hint_locked: "Gesperrt (mehr Versuche nötig)",
        hint_mask: "Maske",
        hint_missing: "k.A.",
        hint_range_match: "Richtige Reichweite",
        hint_type_match: "Richtiger Typ",
        hint_unlocked_at: "Versuche zum Freischalten",
        hint_year_match: "Richtiges Jahr",
        invalid_new_code: "Neuer Code muss 4 Ziffern haben",
        login_success: "Anmeldung erfolgreich!",
        new_code: "Neuer 4-stelliger Code",
        nick_change_blocked: "Nickname kann nicht geändert werden!",
        nick_change_request: "Nickname ändern?",
        nickname_required: "Nickname erforderlich",
        nickname_taken: "Name vergeben. Gib deinen Code ein:",
        normal_item: "Normaler Gegenstand",
        not_registered: "Du musst dich zuerst registrieren!",
        pin_changed: "PIN erfolgreich geändert!",
        profile_code_hidden: "-",
        profile_code_label: "Dein Code",
        profile_copy_code: "Code kopieren",
        profile_guest: "Gast",
        profile_player_id: "Spieler-ID",
        profile_title: "Spielerprofil",
        register_success: "Registrierung erfolgreich!",
        save_code_warning: "Speichere diesen Code! Du brauchst ihn auf anderen Geräten:",
        save_new_pin: "Speichern",
        total_items: "Gesamt Items",
        unknown: "Unbekannt",
        wrong_code: "Aktueller Code ist falsch",
    },
    
    es: {
        lang_tr: "TR",
        lang_en: "EN",
        lang_de: "DE",
        lang_es: "ES",
        lang_ar: "AR",
        
        subtitle: "Desafío diario, ¡pon a prueba tu conocimiento!",
        
                hint_starts_with: "Empieza con",
        hint_words: "Palabras",
        hint_letters: "Letras",
        hint_shuffle: "Mezclado",
classic_title: "CLÁSICO",
        classic_desc: "Adivina el objeto por las estadísticas",
        visual_title: "VISUAL",
        visual_desc: "Identifica el objeto desde primer plano",
        emoji_title: "EMOJI",
        emoji_desc: "Adivina el objeto de pistas emoji",
        audio_title: "AUDIO",
        audio_desc: "Escucha y encuentra el objeto",
        
        back_text: "Menú",
        input_placeholder: "Escribe un nombre...",
        
        header_item: "OBJETO",
        header_type: "TIPO",
        header_range: "RANGO",
        header_sp: "SP?",
        header_year: "AÑO",
        
        label_played: "Jugado",
        label_wins: "Ganado",
        label_winrate: "Tasa",
        label_best: "Mejor",
        
        win_title: "¡FELICIDADES!",
        win_text: "Respuesta correcta:",
        win_attempts: "Intentos:",
        next_mode: "Siguiente Modo",
        
        lb_title: "Tabla de Clasificación",
        lb_subtitle: "Los mejores de hoy",
        lb_global: "Global",
        lb_classic: "Clásico",
        lb_visual: "Visual",
        lb_emoji: "Emoji",
        lb_audio: "Audio",
        lb_today: "Hoy",
        lb_alltime: "Todos los tiempos",
        lb_ingame_title: "Mejores Jugadores",
        lb_empty: "Nadie ha jugado todavía",
        lb_loading: "Cargando...",
        lb_error: "Error al cargar",
        lb_pts: "pts",
        lb_mode: "modo",
        lb_modes: "modos",
        lb_attempt: "intento",
        
        nickname_title: "¡Felicidades!",
        nickname_prompt: "Ingresa un nickname:",
        nickname_placeholder: "Nickname",
        nickname_save: "Guardar",
        nickname_skip: "Saltar",
        
        next_game_label: "ACTUALIZACIÓN:",
        remaining_zoom: "Zoom restante:",
        audio_play_text: "Escucha el sonido y adivina el objeto",
        footer_dev: "Desarrollador:",
        footer_community: "S4 Xero Community",
        
        notif_saved: "¡Puntuación guardada! 🏆",
        notif_duplicate: "¡Ya jugaste este modo hoy!",
        notif_error: "No se pudo guardar la puntuación.",
        score_save_failed: "Error al guardar la puntuación.",
        register_failed: "Error al registrarse. Revisa tu conexión.",
        login_failed: "Error al iniciar sesión. Revisa tu conexión.",
        toast_success: "Éxito",
        toast_error: "Error",
        toast_warning: "Advertencia",
        toast_info: "Info",
        
        coming_soon: "Próximamente",
        mode_coming_soon: "¡Este modo estará activo pronto!",
        tutorial_classic: "Escribe un nombre de objeto",
        hints_title: "Pistas",
        hints_classic: "Presta atención a las estadísticas",
        hints_visual: "Concéntrate en los detalles",
        hints_emoji: "Piensa en el significado",
        already_registered: "Este dispositivo ya está registrado",
        change_pin: "Cambiar PIN",
        classic_hints_title: "Pistas progresivas",
        code_invalid: "¡Código inválido!",
        code_prompt: "Ingresa código de 4 dígitos",
        code_required: "Código requerido (4 dígitos)",
        copied: "Copiado",
        current_code: "Código actual",
        daily_avg: "Intentos prom.",
        daily_players: "Jugadores",
        daily_stats_title: "Estadísticas del día",
        daily_winners: "Ganadores",
        daily_winrate: "Tasa de victoria",
        forgot_code: "¿Olvidaste tu código?",
        hint_a_label: "Categoría",
        hint_attempt_1: "Tipo",
        hint_attempt_2: "Rango",
        hint_attempt_3: "Año",
        hint_attempt_4: "¿Especial?",
        hint_attempt_5: "Primera letra",
        hint_attempt_6: "Primeras 3 letras",
        hint_audio_1: "Pista de tipo",
        hint_audio_2: "Pista de rango",
        hint_audio_3: "Pista de año",
        hint_b_label: "Periodo de lanzamiento",
        hint_c_label: "Estadísticas",
        hint_d_label: "Característica similar",
        hint_emoji_1: "Tipo",
        hint_emoji_2: "Rango",
        hint_emoji_3: "Año",
        hint_emoji_4: "Característica",
        hint_emoji_5: "Primera letra",
        hint_emoji_6: "Primeras letras",
        hint_general: "Escucha con más atención",
        hint_length: "Longitud",
        hint_locked: "Bloqueado (más intentos necesarios)",
        hint_mask: "Máscara",
        hint_missing: "N/D",
        hint_range_match: "Rango correcto",
        hint_type_match: "Tipo correcto",
        hint_unlocked_at: "intentos para desbloquear",
        hint_year_match: "Año correcto",
        invalid_new_code: "El nuevo código debe tener 4 dígitos",
        login_success: "¡Inicio de sesión exitoso!",
        new_code: "Nuevo código de 4 dígitos",
        nick_change_blocked: "¡No se puede cambiar el nickname!",
        nick_change_request: "¿Cambiar nickname?",
        nickname_required: "Nickname requerido",
        nickname_taken: "Nombre en uso. Ingresa tu código:",
        normal_item: "Objeto normal",
        not_registered: "¡Debes registrarte primero!",
        pin_changed: "¡PIN cambiado con éxito!",
        profile_code_hidden: "-",
        profile_code_label: "Tu código",
        profile_copy_code: "Copiar código",
        profile_guest: "Invitado",
        profile_player_id: "ID del jugador",
        profile_title: "Perfil del jugador",
        register_success: "¡Registro exitoso!",
        save_code_warning: "¡Guarda este código! Lo necesitarás en otros dispositivos:",
        save_new_pin: "Guardar",
        total_items: "Total objetos",
        unknown: "Desconocido",
        wrong_code: "El código actual es incorrecto",
    },
    
    ar: {
        lang_tr: "TR",
        lang_en: "EN",
        lang_de: "DE",
        lang_es: "ES",
        lang_ar: "AR",
        
        subtitle: "تحدي يومي، اختبر معرفتك!",
        
                hint_starts_with: "يبدأ بـ",
        hint_words: "كلمات",
        hint_letters: "حروف",
        hint_shuffle: "مُرتَّب عشوائياً",
classic_title: "كلاسيكي",
        classic_desc: "خمن العنصر من الإحصائيات",
        visual_title: "مرئي",
        visual_desc: "حدد العنصر من اللقطة المقربة",
        emoji_title: "إيموجي",
        emoji_desc: "خمن العنصر من إشارات الإيموجي",
        audio_title: "صوت",
        audio_desc: "استمع وابحث عن العنصر",
        
        back_text: "القائمة",
        input_placeholder: "اكتب اسمًا...",
        
        header_item: "العنصر",
        header_type: "النوع",
        header_range: "المدى",
        header_sp: "SP؟",
        header_year: "السنة",
        
        label_played: "لعب",
        label_wins: "فاز",
        label_winrate: "معدل",
        label_best: "أفضل",
        
        win_title: "تهانينا!",
        win_text: "الإجابة الصحيحة:",
        win_attempts: "المحاولات:",
        next_mode: "الوضع التالي",
        
        lb_title: "لوحة الصدارة",
        lb_subtitle: "الأفضل اليوم",
        lb_global: "عالمي",
        lb_classic: "كلاسيكي",
        lb_visual: "مرئي",
        lb_emoji: "إيموجي",
        lb_audio: "صوت",
        lb_today: "اليوم",
        lb_alltime: "كل الأوقات",
        lb_ingame_title: "أفضل اللاعبين",
        lb_empty: "لم يلعب أحد بعد",
        lb_loading: "جاري التحميل...",
        lb_error: "فشل التحميل",
        lb_pts: "نقاط",
        lb_mode: "وضع",
        lb_modes: "أوضاع",
        lb_attempt: "محاولة",
        
        nickname_title: "تهانينا!",
        nickname_prompt: "أدخل اسمًا مستعارًا:",
        nickname_placeholder: "الاسم المستعار",
        nickname_save: "حفظ",
        nickname_skip: "تخطي",
        
        next_game_label: "التحديث:",
        remaining_zoom: "التكبير المتبقي:",
        audio_play_text: "استمع إلى الصوت وخمن العنصر",
        footer_dev: "المطور:",
        footer_community: "S4 Xero Community",
        
        notif_saved: "تم حفظ النتيجة! 🏆",
        notif_duplicate: "لقد لعبت هذا الوضع اليوم بالفعل!",
        notif_error: "تعذر حفظ النتيجة.",
        score_save_failed: "فشل حفظ النتيجة.",
        register_failed: "فشل التسجيل. تحقّق من الاتصال.",
        login_failed: "فشل تسجيل الدخول. تحقّق من الاتصال.",
        toast_success: "نجاح",
        toast_error: "خطأ",
        toast_warning: "تحذير",
        toast_info: "معلومات",
        
        coming_soon: "قريباً",
        mode_coming_soon: "سيكون هذا الوضع نشطاً قريباً!",
        tutorial_classic: "اكتب اسم عنصر للبدء",
        hints_title: "تلميحات",
        hints_classic: "انتبه للإحصائيات",
        hints_visual: "ركز على التفاصيل",
        hints_emoji: "فكر في المعنى",
        already_registered: "هذا الجهاز مسجّل بالفعل",
        change_pin: "تغيير الرمز",
        classic_hints_title: "تلميحات تدريجية",
        code_invalid: "رمز غير صالح!",
        code_prompt: "أدخل رمزاً من 4 أرقام",
        code_required: "الرمز مطلوب (4 أرقام)",
        copied: "تم النسخ",
        current_code: "الرمز الحالي",
        daily_avg: "متوسط المحاولات",
        daily_players: "لاعبون",
        daily_stats_title: "إحصائيات اليوم",
        daily_winners: "فائزون",
        daily_winrate: "معدل الفوز",
        forgot_code: "نسيت رمزك؟",
        hint_a_label: "الفئة",
        hint_attempt_1: "النوع",
        hint_attempt_2: "المدى",
        hint_attempt_3: "السنة",
        hint_attempt_4: "خاص؟",
        hint_attempt_5: "الحرف الأول",
        hint_attempt_6: "أول 3 حروف",
        hint_audio_1: "تلميح النوع",
        hint_audio_2: "تلميح المدى",
        hint_audio_3: "تلميح السنة",
        hint_b_label: "فترة الإصدار",
        hint_c_label: "الإحصائيات",
        hint_d_label: "خاصية مشابهة",
        hint_emoji_1: "النوع",
        hint_emoji_2: "المدى",
        hint_emoji_3: "السنة",
        hint_emoji_4: "الخاصية",
        hint_emoji_5: "الحرف الأول",
        hint_emoji_6: "الحروف الأولى",
        hint_general: "استمع بعناية أكثر",
        hint_length: "الطول",
        hint_locked: "مقفل (يلزم المزيد من التخمينات)",
        hint_mask: "القناع",
        hint_missing: "غير متوفر",
        hint_range_match: "المدى صحيح",
        hint_type_match: "النوع صحيح",
        hint_unlocked_at: "تخمينات للفتح",
        hint_year_match: "السنة صحيحة",
        invalid_new_code: "الرمز الجديد يجب أن يكون 4 أرقام",
        login_success: "تم تسجيل الدخول بنجاح!",
        new_code: "رمز جديد من 4 أرقام",
        nick_change_blocked: "لا يمكن تغيير الاسم!",
        nick_change_request: "تغيير الاسم؟",
        nickname_required: "الاسم مطلوب",
        nickname_taken: "الاسم مأخوذ. أدخل رمزك:",
        normal_item: "عنصر عادي",
        not_registered: "يجب التسجيل أولاً!",
        pin_changed: "تم تغيير الرمز بنجاح!",
        profile_code_hidden: "-",
        profile_code_label: "رمزك",
        profile_copy_code: "نسخ الرمز",
        profile_guest: "زائر",
        profile_player_id: "معرّف اللاعب",
        profile_title: "ملف اللاعب",
        register_success: "تم التسجيل بنجاح!",
        save_code_warning: "احفظ هذا الرمز! ستحتاجه على أجهزة أخرى:",
        save_new_pin: "حفظ",
        total_items: "إجمالي العناصر",
        unknown: "غير معروف",
        wrong_code: "الرمز الحالي خاطئ",
    }
};

// Mod sıralaması
const MODE_SEQUENCE = ['classic', 'visual', 'emoji'];

// İpuçları
const MODE_HINTS = {
    tr: {
        classic: "İstatistiklere dikkat et",
        visual: "Detaylara odaklan",
        emoji: "Anlamı düşün, tek tek bakma"
    },
    en: {
        classic: "Pay attention to stats",
        visual: "Focus on details",
        emoji: "Think about meaning"
    },
    de: {
        classic: "Achte auf Statistiken",
        visual: "Fokussiere dich auf Details",
        emoji: "Denke an die Bedeutung"
    },
    es: {
        classic: "Presta atención a las estadísticas",
        visual: "Concéntrate en los detalles",
        emoji: "Piensa en el significado"
    },
    ar: {
        classic: "انتبه للإحصائيات",
        visual: "ركز على التفاصيل",
        emoji: "فكر في المعنى"
    }
};

let currentLang = localStorage.getItem('s4dle_lang') || 'en';
let currentMode = null;
let targetItem = null;
let guesses = [];
let isGameOver = false;
let zoomLevel = 6;
let gameNumber = 0;

// UI Elements
const ui = {
    menu: document.getElementById('game-modes'),
    game: document.getElementById('game-container'),
    gameTitle: document.getElementById('game-title'),
    modeUI: document.getElementById('mode-ui-container'),
    input: document.getElementById('guess-input'),
    suggestions: document.getElementById('suggestions'),
    guessesList: document.getElementById('guesses-list'),
    result: document.getElementById('result-message'),
    backBtn: document.getElementById('back-btn'),
    audioPlayer: document.getElementById('game-audio-player'),
    nicknameModal: document.getElementById('nickname-modal'),
    nicknameInput: document.getElementById('nickname-input'),
    nicknameSubmit: document.getElementById('nickname-submit'),
    nicknameSkip: document.getElementById('nickname-skip'),
    nicknameClose: document.getElementById('nickname-close'),
    langToggle: document.getElementById('lang-toggle'),
    langMenu: document.getElementById('lang-menu')
};

// ==================== SES SİSTEMİ ====================

// Ses dosyaları konfig (tüm diller için)
const AUDIO_CONFIG = {
    tr: {
        click: 'assets/sounds/click-tr.mp3',
        success: 'assets/sounds/success-tr.mp3',
        error: 'assets/sounds/error-tr.mp3',
        bgMusic: 'assets/sounds/bg-music-tr.mp3'
    },
    default: {
        click: 'assets/sounds/click.mp3',
        success: 'assets/sounds/success.mp3',
        error: 'assets/sounds/error.mp3',
        bgMusic: 'assets/sounds/bg-music.mp3'
    }
};

function playSound(name) {
    try {
        const config = currentLang === 'tr' ? AUDIO_CONFIG.tr : AUDIO_CONFIG.default;
        const soundPath = config[name];
        
        if (!soundPath) return;
        
        // Dosya var mı kontrol et (varsa çal, yoksa sessiz devam et)
        const audio = new Audio(soundPath);
        audio.volume = 0.5;
        audio.play().catch(() => {
            // Ses dosyası yoksa hata verme, sessiz devam et
        });
    } catch (e) {
        // Hata olsa bile site bozulmasın
    }
}

function updateBackgroundMusic() {
    try {
        const config = currentLang === 'tr' ? AUDIO_CONFIG.tr : AUDIO_CONFIG.default;
        const bgMusicPath = config.bgMusic;
        
        if (!bgMusicPath) {
            stopBackgroundMusic();
            return;
        }
        
        // Arka plan müziği çal (varsa)
        let bgMusic = document.getElementById('bg-music-player');
        if (!bgMusic) {
            bgMusic = new Audio(bgMusicPath);
            bgMusic.id = 'bg-music-player';
            bgMusic.loop = false;
            bgMusic.volume = 0.15;
            document.body.appendChild(bgMusic);
        } else {
            bgMusic.src = bgMusicPath;
        }
        
        bgMusic.play().catch(() => {
            // Ses dosyası yoksa sessizce devam et
        });
    } catch (e) {
        // Hata olsa bile site bozulmasın
    }
}

function stopBackgroundMusic() {
    const bgMusic = document.getElementById('bg-music-player');
    if (bgMusic) {
        bgMusic.pause();
        bgMusic.currentTime = 0;
    }
}

// ==================== TUTORIAL & HINTS ====================

function showTutorial() {
    const tutorial = document.getElementById('tutorial-hint');
    if (tutorial && currentMode === 'classic') {
        tutorial.classList.remove('hidden', 'faded');
    }
}

function hideTutorial() {
    const tutorial = document.getElementById('tutorial-hint');
    if (tutorial && !tutorial.classList.contains('faded')) {
        tutorial.classList.add('faded');
        setTimeout(() => tutorial.classList.add('hidden'), 300);
    }
}

function updateHints(mode) {
    const hintsPanel = document.getElementById('hints-panel');
    const hintsText = document.getElementById('hints-text');
    
    if (!hintsPanel || !hintsText) return;
    
    if (mode === 'classic') {
        hintsPanel.classList.remove('hidden');
        // Progressive hints gösterilecek
        updateClassicProgressiveHints();
    } else {
        hintsPanel.classList.remove('hidden');
        if (MODE_HINTS[currentLang] && MODE_HINTS[currentLang][mode]) {
            hintsText.textContent = MODE_HINTS[currentLang][mode];
        }
    }
}

// Classic mode progressive hints
function updateClassicProgressiveHints() {
    if (currentMode !== 'classic' || !targetItem) return;
    
    const wrongGuesses = guesses.filter(name => name !== targetItem.name).length;
    const hintsText = document.getElementById('hints-text');
    
    if (!hintsText) return;
    
    const hints = [];
    
    // Hint A: After 2 wrong guesses - Category/Type
    if (wrongGuesses >= 2) {
        const hintA = `✅ ${t('hint_a_label')}: ${targetItem.type || t('hint_missing')}`;
        hints.push(hintA);
    } else {
        hints.push(`🔒 ${t('hint_a_label')} (${2 - wrongGuesses} ${t('hint_unlocked_at')})`);
    }
    
    // Hint B: After 4 wrong guesses - Rarity/Era
    if (wrongGuesses >= 4) {
        const era = targetItem.year ? `${targetItem.year}` : t('hint_missing');
        const rarity = targetItem.sp ? 'SP Item' : 'Normal Item';
        const hintB = `✅ ${t('hint_b_label')}: ${era} / ${rarity}`;
        hints.push(hintB);
    } else if (wrongGuesses >= 2) {
        hints.push(`🔒 ${t('hint_b_label')} (${4 - wrongGuesses} ${t('hint_unlocked_at')})`);
    }
    
    // Hint C: After 6 wrong guesses - Stats summary
    if (wrongGuesses >= 6) {
        const stats = `Range: ${targetItem.range || '?'}`;
        const hintC = `✅ ${t('hint_c_label')}: ${stats}`;
        hints.push(hintC);
    } else if (wrongGuesses >= 4) {
        hints.push(`🔒 ${t('hint_c_label')} (${6 - wrongGuesses} ${t('hint_unlocked_at')})`);
    }
    
    // Hint D: After 8 wrong guesses - First letter
    if (wrongGuesses >= 8) {
        const firstLetter = targetItem.name[0];
        const hintD = `✅ ${t('hint_d_label')}: "${firstLetter}..." ile başlıyor`;
        hints.push(hintD);
    } else if (wrongGuesses >= 6) {
        hints.push(`🔒 ${t('hint_d_label')} (${8 - wrongGuesses} ${t('hint_unlocked_at')})`);
    }
    
    hintsText.innerHTML = hints.join('<br>');
}

// ==================== SIRADAKİ MOD ====================

function nextGameMode() {
    const currentIndex = MODE_SEQUENCE.indexOf(currentMode);
    const nextIndex = (currentIndex + 1) % MODE_SEQUENCE.length;
    const nextMode = MODE_SEQUENCE[nextIndex];
    
    // Oyun ekranını gizle
    ui.game.style.opacity = '0';
    setTimeout(() => {
        // Yeni modu başlat
        startGame(nextMode);
        ui.game.style.opacity = '1';
    }, 300);
}

// Global yap (HTML'den erişilebilir olsun)
window.nextGameMode = nextGameMode;

// Helper function for translations
function t(key) {
    return I18N[currentLang][key] || I18N['tr'][key] || key;
}

function applyLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        // profile-nickname elementini atla - bu dinamik olarak ayarlanıyor
        if (el.id === 'profile-nickname') return;
        
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });
    
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });
    
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
}

function updateLangToggle(lang) {
    const langLabel = ui.langToggle.querySelector('.lang-label');
    if (langLabel) {
        langLabel.textContent = I18N[lang][`lang_${lang}`];
    }
}

function changeLang(lang) {
    currentLang = lang;
    localStorage.setItem('s4dle_lang', lang);
    
    applyLanguage(lang);
    updateLangToggle(lang);
    updateBackgroundMusic();
    
    // Menüdeyse menu leaderboard'u yenile
    if (!ui.menu.classList.contains('hidden')) {
        loadMenuLeaderboard();
    }
    
    // Oyundaysa oyun içi leaderboard ve hints'i yenile
    if (!ui.game.classList.contains('hidden')) {
        loadInGameLeaderboard(currentMode);
        updateHints(currentMode);
        
        // Tahmin sonuçlarını yenile (header'lar için)
        const resultsHeader = document.querySelector('.results-header');
        if (resultsHeader) {
            resultsHeader.innerHTML = `
                <span data-i18n="header_item">${t('header_item')}</span>
                <span data-i18n="header_type">${t('header_type')}</span>
                <span data-i18n="header_range">${t('header_range')}</span>
                <span data-i18n="header_sp">${t('header_sp')}</span>
                <span data-i18n="header_year">${t('header_year')}</span>
            `;
        }
    }


    // Keep player profile state (avoid reverting to guest on language switch)
    try { updateProfileUI(); } catch (e) {}
}


// ==================== INIT ====================

document.addEventListener('DOMContentLoaded', () => {
    // Önce pending toast varsa göster (reload sonrası)
    showPendingToastIfAny();
    
    // Türkiye saatine göre eski günlerin kayıtlarını temizle
    cleanOldGameData();
    
    applyLanguage(currentLang);
    updateLangToggle(currentLang);
    
    // Load player profile
    loadPlayerProfile();
    
    // Tema her zaman dark
    document.documentElement.setAttribute('data-theme', 'dark');
    
    // BUG FIX: Suggestions kutusunu search-box içinde tut, overflow ile kontrol et
    // body'ye taşıma - CSS ile çöz
    
    loadMenuLeaderboard();
    setupEventListeners();
    startCountdown();
    updateBackgroundMusic();
});

// Türkiye saatine göre eski günlerin oyun kayıtlarını temizle
function cleanOldGameData() {
    const currentDay = getTurkeyGameNumber();
    const keysToRemove = [];
    
    // LocalStorage'daki tüm kayıtları kontrol et
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        
        // Sadece oyun kayıtlarını kontrol et (s4dle_save_ ile başlayanlar)
        if (key && key.startsWith('s4dle_save_')) {
            // Anahtar formatı: s4dle_save_MODE_GAMENUMBER
            const parts = key.split('_');
            const savedGameNumber = parseInt(parts[parts.length - 1]);
            
            // Eğer bugünden eski bir kayıtsa işaretle
            if (!isNaN(savedGameNumber) && savedGameNumber < currentDay) {
                keysToRemove.push(key);
            }
        }
    }
    
    // İşaretlenen kayıtları sil
    keysToRemove.forEach(key => {
        localStorage.removeItem(key);
    });
}

function setupEventListeners() {
    // Mode Cards
    document.querySelectorAll('.mode-card').forEach(card => {
        card.addEventListener('click', () => {
            if (card.classList.contains('disabled')) {
                showNotification(t('mode_coming_soon'), 'info');
                return;
            }
            playSound('click');
            startGame(card.dataset.mode);
        });
    });


    // Menu leaderboard tabs
    document.querySelectorAll('.menu-lb-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            playSound('click');
            document.querySelectorAll('.menu-lb-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            loadMenuLeaderboard();
        });
    });
    
    ui.backBtn.addEventListener('click', () => {
        playSound('click');
        goHome();
    });
    
    ui.input.addEventListener('input', handleInput);
    ui.input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') selectSuggestion();
    });
    
    // ============ NICKNAME MODAL - REFRESH ENGELLEMELERİ ============
    
    // Nickname input'ta Enter'a basınca Save tetikle, refresh yapma
    if (ui.nicknameInput) {
        ui.nicknameInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                e.stopPropagation();
                if (ui.nicknameSubmit) ui.nicknameSubmit.click();
            }
        });
    }
    
    // Code input'ta Enter'a basınca Save tetikle
    const codeInput = document.getElementById('code-input');
    if (codeInput) {
        codeInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                e.stopPropagation();
                if (ui.nicknameSubmit) ui.nicknameSubmit.click();
            }
        });
    }
    
    // Save butonu - preventDefault ile
    ui.nicknameSubmit.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        handleNicknameSave(e);
    });
    
    // Skip butonu - preventDefault ile
    ui.nicknameSkip.addEventListener('click', async (e) => {
        e.preventDefault();
        e.stopPropagation();
        playSound('click');

        // Rastgele bir nick oluştur
        const randomNick = 'player' + Math.floor(Math.random() * 1000000);

        // Close immediately so user feels it worked
        ui.nicknameModal.classList.add('hidden');

        // Server'a kaydet — registerPlayer zaten başarılıysa localStorage'a yazar
        try {
            const regResult = await registerPlayer(randomNick);
            if (regResult && regResult.success) {
                // registerPlayer zaten nick + code yazdı, sadece skor gönder
                if (isGameOver && currentMode) {
                    saveScore();
                }
            } else {
                // Server kayıt başarısız
                showNotification(t('register_failed') || 'Kayıt başarısız', 'error');
            }
        } catch (e2) {
            // Offline
            showNotification(t('register_failed') || 'Bağlantı hatası', 'error');
        }
    });

    // Close button for nickname panel
    if (ui.nicknameClose) {
        ui.nicknameClose.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            playSound('click');
            
            // Eğer kod soruluyorsa (NICKNAME_TAKEN durumu), kapatınca nick'i KAYDETME
            const codeContainer = document.getElementById('code-input-container');
            const isCodeFlow = codeContainer && !codeContainer.classList.contains('hidden');
            
            if (isCodeFlow) {
                // Kod soruluyordu ama kullanıcı kaçtı - nick'i geri al, kaydetme
                const oldNick = localStorage.getItem('s4dle_player_nickname');
                if (!oldNick || oldNick === ui.nicknameInput.value.trim()) {
                    // Daha önce kayıtlı nick yoksa veya aynıysa temizle
                    localStorage.removeItem('s4dle_player_nickname');
                }
                ui.nicknameInput.value = '';
                document.getElementById('code-input').value = '';
                codeContainer.classList.add('hidden');
                document.getElementById('forgot-code-link')?.classList.add('hidden');
                updateProfileUI();
            }
            
            ui.nicknameModal.classList.add('hidden');
        });
    }

    
    // Player profile click - show info or register
    const profilePanel = document.getElementById('player-profile');
    if (profilePanel) {
        profilePanel.addEventListener('click', () => {
            playSound('click');
            const existingNick = localStorage.getItem('s4dle_player_nickname');
            const existingCode = localStorage.getItem('s4dle_player_code');
            
            if (existingNick && existingCode) {
                // Zaten kayıtlı - bilgi göster, nick değiştirme yok
                openProfileInfoModal();
            } else {
                // Kayıtlı değil - kayıt modalı aç
                openNicknameModal();
            }
        });
    }
    
    ui.langToggle.addEventListener('click', () => {
        playSound('click');
        ui.langMenu.classList.toggle('hidden');
    });
    
    document.querySelectorAll('[data-lang]').forEach(btn => {
        btn.addEventListener('click', () => {
            playSound('click');
            changeLang(btn.getAttribute('data-lang'));
            ui.langMenu.classList.add('hidden');
        });
    });
    
    document.addEventListener('click', (e) => {
        if (!ui.langToggle.contains(e.target) && !ui.langMenu.contains(e.target)) {
            ui.langMenu.classList.add('hidden');
        }
    });
}

function getTurkeyGameNumber() {
    const start = new Date('2024-01-01T00:00:00+03:00'); // Türkiye saati
    const now = new Date();
    
    // UTC'den Türkiye saatine çevir (UTC+3)
    const turkeyTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Istanbul' }));
    turkeyTime.setHours(0, 0, 0, 0); // Günün başlangıcı (00:00:00)
    
    const startTime = new Date(start);
    startTime.setHours(0, 0, 0, 0);
    
    return Math.floor((turkeyTime - startTime) / (1000 * 60 * 60 * 24));
}

function getGameNumber() {
    return getTurkeyGameNumber();
}

function getDailyTargetItem(mode) {
    const day = getGameNumber();
    let pool = (mode === 'visual') ? [...items, ...maps] : items;
    
    let seed = day;
    for (let i = 0; i < mode.length; i++) {
        seed = (seed * 31 + mode.charCodeAt(i)) & 0x7FFFFFFF;
    }
    
    return pool[seed % pool.length];
}

function startGame(mode) {
    // Günlük oyun numarası (her mod için aynı gün anahtarı)
    gameNumber = getGameNumber();

    currentMode = mode;
    targetItem = getDailyTargetItem(mode);
    
    // Bugün bu modu zaten kazanmış mı kontrol et
    const saved = loadGameProgress();
    if (saved && saved.won) {
        // Zaten kazanılmış - restore et
        guesses = [];
        isGameOver = false;
        zoomLevel = 6;
        
        ui.menu.classList.add('hidden');
        ui.game.classList.remove('hidden');
        ui.gameTitle.textContent = t(`${mode}_title`);
        ui.input.value = '';
        ui.input.disabled = true;
        ui.input.placeholder = t('win_title');
        ui.suggestions.classList.add('hidden');
        ui.guessesList.innerHTML = '';
        ui.result.classList.add('hidden');
        renderModeUI();
        loadInGameLeaderboard(mode);
        
        restoreGame(saved);
        return; // Erken çık
    }
    
    // Yeni oyun başlat
    guesses = [];
    isGameOver = false;
    zoomLevel = 6;
    
    ui.menu.classList.add('hidden');
    ui.game.classList.remove('hidden');
    ui.gameTitle.textContent = t(`${mode}_title`);
    ui.input.value = '';
    ui.input.disabled = false; // Input'u tekrar aktif yap
    ui.input.placeholder = t('input_placeholder');
    ui.suggestions.classList.add('hidden');
    ui.guessesList.innerHTML = '';
    ui.result.classList.add('hidden');
    renderModeUI();
    loadInGameLeaderboard(mode); // Sadece oyun içi mini leaderboard
    
    // YENİ: Tutorial ve hints
    if (currentMode === 'classic') {
        showTutorial();
    }
    updateHints(currentMode);
}

function renderModeUI() {
    ui.modeUI.innerHTML = '';
    
    // Results area (sadece klasik modda göster)
    const resultsArea = document.querySelector('.results-area');
    const resultsHeader = document.querySelector('.results-header');

    if (currentMode === 'classic') {
        // Show hints in sidebar
        const hintsSidebar = document.getElementById('classic-hints-sidebar');
        if (hintsSidebar) {
            hintsSidebar.style.display = 'block';
        }
        // Hintleri sıfırla (yeni oyun başladığında)
        resetClassicHints();
        
        // Klasik modda tablo başlıklarını göster
        if (resultsHeader) resultsHeader.style.display = '';
        if (resultsArea) resultsArea.classList.remove('visual-mode-results');
    } else {
        // Hide hints for other modes
        const hintsSidebar = document.getElementById('classic-hints-sidebar');
        if (hintsSidebar) {
            hintsSidebar.style.display = 'none';
        }
        
        // Visual/Emoji/Audio modlarında tablo başlıklarını gizle
        if (resultsHeader) resultsHeader.style.display = 'none';
        if (resultsArea) resultsArea.classList.add('visual-mode-results');
    }
    
    if (currentMode === 'visual') {
        ui.modeUI.innerHTML = `
            <div class="visual-mode-container">
                <div class="visual-frame">
                    <div class="visual-image" id="mode-image"></div>
                    <div class="visual-overlay">
                        <div class="visual-overlay-content">
                            <span class="visual-overlay-label">${t('remaining_zoom')}</span>
                            <span class="visual-overlay-value" id="zoom-text">6</span>
                        </div>
                    </div>
                </div>
            </div>`;
        updateZoomUI();
    } 
    else if (currentMode === 'emoji') {
        const emojiStr = targetItem.emojis ? targetItem.emojis.join(" ") : "❓";
        ui.modeUI.innerHTML = `
            <div class="emoji-mode-container">
                <div class="emoji-display">${emojiStr}</div>
                <div class="emoji-hints" id="emoji-hints">
                    <div class="emoji-hint locked" id="emoji-hint-1">
                        <span class="emoji-hint-icon">🔒</span>
                        <span class="emoji-hint-text">${t('hint_locked') || 'Kilitli'}</span>
                    </div>
                    <div class="emoji-hint locked" id="emoji-hint-2">
                        <span class="emoji-hint-icon">🔒</span>
                        <span class="emoji-hint-text">${t('hint_locked') || 'Kilitli'}</span>
                    </div>
                    <div class="emoji-hint locked" id="emoji-hint-3">
                        <span class="emoji-hint-icon">🔒</span>
                        <span class="emoji-hint-text">${t('hint_locked') || 'Kilitli'}</span>
                    </div>
                </div>
                <p class="emoji-hint-note">${t('hints_emoji')}</p>
            </div>`;
    }
    else if (currentMode === 'audio') {
        ui.modeUI.innerHTML = `
            <div class="audio-mode-container">
                <div class="audio-frame">
                    <button class="play-audio-btn" onclick="playGameAudio()">▶️</button>
                    <p>${t('audio_play_text')}</p>
                </div>
            </div>`;
        ui.audioPlayer.src = targetItem.audioUrl || 'sounds/click.mp3';
    }
    // Klasik mod için herhangi bir ekstra UI yok
}

function makeGuess(guessItem) {
    if (isGameOver) return;

    // Aynı tahmini tekrar yapma (listeyi daralt)
    if (guesses.includes(guessItem.name)) {
        ui.input.value = '';
        ui.suggestions.classList.add('hidden');
        return;
    }

    guesses.push(guessItem.name);
    addGuessRow(guessItem);

    // İlk tahminde tutorial gizle
    if (guesses.length === 1) {
        hideTutorial();
    }

    if (guessItem.name === targetItem.name) {
        winGame();
    } else {
        playSound('error');
        
        // Classic Mode: Update progressive hints on wrong guess
        if (currentMode === 'classic') {
            const wrongCount = guesses.filter(name => name !== targetItem.name).length;
            updateClassicHints(wrongCount);
        }
        
        // Emoji Mode: Progressive hints
        if (currentMode === 'emoji') {
            const wrongCount = guesses.filter(name => name !== targetItem.name).length;
            updateEmojiHints(wrongCount);
        }
        
        if (currentMode === 'visual') {
            if (zoomLevel > 1) zoomLevel--;
            updateZoomUI();
        }
        
        saveGameProgress(false);
    }
}

function winGame() {
    isGameOver = true;
    playSound('success');
    
    // Input'u devre dışı bırak
    ui.input.disabled = true;
    ui.input.placeholder = t('win_title');
    ui.suggestions.classList.add('hidden');
    
    if (currentMode === 'visual') {
        const imgDiv = document.getElementById('mode-image');
        if (imgDiv) {
            imgDiv.style.backgroundSize = 'contain';
            imgDiv.style.backgroundPosition = 'center center';
            imgDiv.style.filter = 'blur(0px) brightness(1.05)';
        }
    }
    
    confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#00f2ff', '#ff0078', '#a855f7']
    });
    
    showResultMessage();
    saveGameProgress(true);
    updateStats(true);
    
    // Check if player is registered
    const playerNickname = localStorage.getItem('s4dle_player_nickname');
    if (!playerNickname) {
        setTimeout(() => ui.nicknameModal.classList.remove('hidden'), 800);
    } else {
        saveScore();
    }
}

function showResultMessage() {
    ui.result.classList.remove('hidden');
    ui.result.innerHTML = `
        <div class="result-content">
            <h3>${t('win_title')}</h3>
            <p>${t('win_text')} <strong>${targetItem.name}</strong></p>
            <p>${t('win_attempts')} <strong>${guesses.length}</strong></p>
            <div class="result-buttons">
                <button class="btn-primary" onclick="nextGameMode()">
                    🎮 ${t('next_mode')}
                </button>
            </div>
        </div>
    `;
}

function addGuessRow(guessItem) {
    const row = document.createElement('div');
    row.className = 'guess-row guess-row-enter';
    
    const isCorrect = guessItem.name === targetItem.name;
    
    // Visual ve Emoji modlarinda sadece isim goster
    if (currentMode === 'visual' || currentMode === 'emoji' || currentMode === 'audio') {
        row.innerHTML = '<div class="guess-cell guess-cell-single ' + (isCorrect ? 'correct' : 'wrong') + '">' + guessItem.name + '</div>';
    } else {
        // Klasik mod - tum istatistikler
        const typeMatch = guessItem.type === targetItem.type;
        const rangeMatch = guessItem.range === targetItem.range;
        const spMatch = guessItem.sp === targetItem.sp;
        const yearMatch = guessItem.year === targetItem.year;
        
        row.innerHTML = 
            '<div class="guess-cell ' + (isCorrect ? 'correct' : '') + '">' + guessItem.name + '</div>' +
            '<div class="guess-cell ' + (typeMatch ? 'correct' : 'wrong') + '">' + (guessItem.type || '-') + '</div>' +
            '<div class="guess-cell ' + (rangeMatch ? 'correct' : 'wrong') + '">' + (guessItem.range || '-') + '</div>' +
            '<div class="guess-cell ' + (spMatch ? 'correct' : 'wrong') + '">' + (guessItem.sp !== null ? (guessItem.sp ? 'Yes' : 'No') : '-') + '</div>' +
            '<div class="guess-cell ' + (yearMatch ? 'correct' : 'wrong') + '">' + (guessItem.year || '-') + '</div>';
    }
    
    ui.guessesList.insertBefore(row, ui.guessesList.firstChild);
    
    // Trigger animation
    requestAnimationFrame(() => {
        row.classList.remove('guess-row-enter');
    });
}

function addGuessRowSilent(guessItem) {
    const row = document.createElement('div');
    row.className = 'guess-row';
    
    const isCorrect = guessItem.name === targetItem.name;
    
    if (currentMode === 'visual' || currentMode === 'emoji' || currentMode === 'audio') {
        row.innerHTML = '<div class="guess-cell guess-cell-single ' + (isCorrect ? 'correct' : 'wrong') + '">' + guessItem.name + '</div>';
    } else {
        const typeMatch = guessItem.type === targetItem.type;
        const rangeMatch = guessItem.range === targetItem.range;
        const spMatch = guessItem.sp === targetItem.sp;
        const yearMatch = guessItem.year === targetItem.year;
        
        row.innerHTML = 
            '<div class="guess-cell ' + (isCorrect ? 'correct' : '') + '">' + guessItem.name + '</div>' +
            '<div class="guess-cell ' + (typeMatch ? 'correct' : 'wrong') + '">' + (guessItem.type || '-') + '</div>' +
            '<div class="guess-cell ' + (rangeMatch ? 'correct' : 'wrong') + '">' + (guessItem.range || '-') + '</div>' +
            '<div class="guess-cell ' + (spMatch ? 'correct' : 'wrong') + '">' + (guessItem.sp !== null ? (guessItem.sp ? 'Yes' : 'No') : '-') + '</div>' +
            '<div class="guess-cell ' + (yearMatch ? 'correct' : 'wrong') + '">' + (guessItem.year || '-') + '</div>';
    }
    
    ui.guessesList.insertBefore(row, ui.guessesList.firstChild);
}


// YENİ FONKSIYON - Klasik mod ipuçları
function handleInput() {
    const query = ui.input.value.trim().toLowerCase();
    
    if (query.length === 0) {
        ui.suggestions.classList.add('hidden');
        return;
    }
    
    const pool = (currentMode === 'visual') ? [...items, ...maps] : items;
    const filtered = pool.filter(item => 
        item.name.toLowerCase().includes(query) && !guesses.includes(item.name)
    );
if (filtered.length > 0) {
        ui.suggestions.innerHTML = filtered.slice(0, 8).map(item => `
            <div class="suggestion-item" onclick="selectItem('${item.name.replace(/'/g, "\\'")}')">
                ${item.name}
            </div>
        `).join('');
        ui.suggestions.classList.remove('hidden');
    } else {
        ui.suggestions.classList.add('hidden');
    }
}

function selectItem(name) {
    const pool = (currentMode === 'visual') ? [...items, ...maps] : items;
    const item = pool.find(i => i.name === name);
    if (item) {
        makeGuess(item);
        ui.input.value = '';
        ui.suggestions.classList.add('hidden');
    }
}

function selectSuggestion() {
    const first = ui.suggestions.querySelector('.suggestion-item');
    if (first) {
        const name = first.textContent.trim();
        selectItem(name);
    }
}

function updateZoomUI() {
    const imgDiv = document.getElementById('mode-image');
    const zoomText = document.getElementById('zoom-text');
    
    if (!imgDiv || !targetItem) return;
    
    imgDiv.style.backgroundImage = `url('${targetItem.imageUrl}')`;
    
    if (zoomText) {
        zoomText.textContent = zoomLevel;
    }
    
    if (isGameOver) {
        imgDiv.style.backgroundSize = 'contain';
        imgDiv.style.backgroundPosition = 'center center';
        imgDiv.style.filter = 'blur(0px) brightness(1.05)';
    } else {
        let scale;
        switch(zoomLevel) {
            case 6: scale = 150; break;
            case 5: scale = 125; break;
            case 4: scale = 110; break;
            case 3: scale = 95; break;
            case 2: scale = 85; break;
            case 1: scale = 75; break;
        }
        imgDiv.style.backgroundSize = `${scale}%`;
        imgDiv.style.backgroundPosition = 'center center';
        const blurAmount = Math.max(0, (zoomLevel - 1) * 8); // Daha bulanık (2.5 → 8)
        imgDiv.style.filter = `blur(${blurAmount}px)`;
    }
}

function playGameAudio() {
    ui.audioPlayer.play();
}

function goHome() {
    ui.game.classList.add('hidden');
    ui.menu.classList.remove('hidden');
    currentMode = null;
    loadMenuLeaderboard();
}

// ==================== STATS & STORAGE ====================

function updateStats(won) {
    // İstatistikleri LocalStorage'da sakla (ileride kullanılabilir)
    const key = `s4dle_stats_${currentMode}`;
    const saved = localStorage.getItem(key);
    const stats = saved ? JSON.parse(saved) : { played: 0, wins: 0, bestStreak: 0 };
    
    stats.played++;
    if (won) {
        stats.wins++;
        if (guesses.length < stats.bestStreak || stats.bestStreak === 0) {
            stats.bestStreak = guesses.length;
        }
    }
    localStorage.setItem(key, JSON.stringify(stats));
}

function saveGameProgress(won) {
    const data = {
        gameNumber,
        mode: currentMode,
        guesses,
        won,
        targetItem: targetItem.name,
        zoomLevel
    };
    localStorage.setItem(`s4dle_save_${currentMode}_${gameNumber}`, JSON.stringify(data));
}

function loadGameProgress() {
    const saved = localStorage.getItem(`s4dle_save_${currentMode}_${gameNumber}`);
    return saved ? JSON.parse(saved) : null;
}

// Admin hesap sildiğinde tüm oyun kayıtlarını temizle
function clearAllGameProgress() {
    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('s4dle_save_')) {
            keysToRemove.push(key);
        }
    }
    keysToRemove.forEach(key => localStorage.removeItem(key));
}

function isDuplicatePlay(mode) {
    const saved = loadGameProgress();
    return saved && saved.won;
}

function restoreGame(saved) {
    guesses = saved.guesses || [];
    isGameOver = saved.won;
    zoomLevel = saved.zoomLevel || 1;
    
    // ÖNEMLI: Kazanılmış oyunu geri yüklerken ipucu gösterme
    const skipHints = isGameOver;
    
    guesses.forEach(guessName => {
        const pool = (currentMode === 'visual') ? [...items, ...maps] : items;
        const item = pool.find(i => i.name === guessName);
        if (item && !skipHints) {
            addGuessRow(item);
        } else if (item && skipHints) {
            // Sadece satırı ekle, ipuçlarını gösterme
            addGuessRowSilent(item);
        }
    });
    
    if (isGameOver) {
        showResultMessage();
        if (currentMode === 'visual') updateZoomUI();
        // Input'u devre dışı bırak
        ui.input.disabled = true;
        ui.input.placeholder = t('win_title');
    }
}

// ==================== LEADERBOARD ====================

const API_BASE = window.location.origin + '/api';

const PLAYER_ID_KEY = 's4dle_player_id';
function getPlayerId() {
    let id = localStorage.getItem(PLAYER_ID_KEY);
    if (!id) {
        id = (window.crypto && crypto.randomUUID)
            ? crypto.randomUUID()
            : 'pid_' + Math.random().toString(16).slice(2) + Date.now().toString(16);
        localStorage.setItem(PLAYER_ID_KEY, id);
    }
    return id;
}


async function loadMenuLeaderboard() {
    const activeTab = document.querySelector('.menu-lb-tab.active');
    const view = activeTab ? activeTab.getAttribute('data-view') : 'global';

    const list = document.getElementById('menu-leaderboard-list');
    list.innerHTML = `<div class="lb-loading">${t('lb_loading')}</div>`;

    try {
        const url = view === 'global'
            ? `${API_BASE}/leaderboard?scope=global&day=today`
            : `${API_BASE}/leaderboard?mode=${encodeURIComponent(view)}&day=today`;

        const res = await fetch(url);
        const data = await res.json();

        const rows = Array.isArray(data?.data)
            ? data.data
            : (Array.isArray(data?.leaderboard) ? data.leaderboard : []);

        if (rows.length > 0) {
            const normalized = rows.map((entry) => {
                const score = (view === 'global')
                    ? (entry.globalScore ?? entry.score ?? 0)
                    : (entry.score ?? Math.max(0, 7 - (entry.attempts ?? 0)));
                const attempts = entry.totalAttempts ?? entry.attempts ?? 0;
                const modes = entry.playedModesCount ?? null;

                return {
                    nickname: entry.nickname || '???',
                    score,
                    attempts,
                    modes
                };
            });

            const rankIcons = ['👑', '🥈', '🥉'];
            
            list.innerHTML = normalized.map((entry, i) => {
                const isTop3 = i < 3;
                const rankClass = i === 0 ? 'rank-gold' : (i === 1 ? 'rank-silver' : (i === 2 ? 'rank-bronze' : ''));
                const icon = isTop3 ? rankIcons[i] : '';
                
                return `
                <div class="menu-lb-item ${rankClass}">
                    <div class="lb-rank-badge ${rankClass}">
                        ${isTop3 ? `<span class="lb-rank-icon">${icon}</span>` : `<span class="lb-rank-num">${i + 1}</span>`}
                    </div>
                    <div class="lb-player-info">
                        <span class="lb-player-name">${entry.nickname}</span>
                        ${entry.modes ? `<span class="lb-player-meta">${entry.modes} ${t('lb_modes')}</span>` : ''}
                    </div>
                    <div class="lb-score-badge">
                        <span class="lb-score-value">${entry.score}</span>
                        <span class="lb-score-label">${t('lb_pts')}</span>
                    </div>
                </div>`;
            }).join('');
        } else {
            list.innerHTML = `<div class="lb-empty">${t('lb_empty')}</div>`;
        }
    } catch (e) {
        list.innerHTML = `<div class="lb-error">${t('lb_error')}</div>`;
    }
}

async function loadInGameLeaderboard(mode) {
    const list = document.getElementById('ingame-leaderboard-list');
    list.innerHTML = `<div class="lb-loading">${t('lb_loading')}</div>`;

    try {
        const res = await fetch(`${API_BASE}/leaderboard?mode=${encodeURIComponent(mode)}&day=today`);
        const data = await res.json();

        const rows = Array.isArray(data?.data)
            ? data.data
            : (Array.isArray(data?.leaderboard) ? data.leaderboard : []);

        if (rows.length > 0) {
            const rankIcons = ['👑', '🥈', '🥉'];
            list.innerHTML = rows.slice(0, 5).map((entry, i) => {
                const isTop3 = i < 3;
                const rankClass = i === 0 ? 'rank-gold' : (i === 1 ? 'rank-silver' : (i === 2 ? 'rank-bronze' : ''));
                return `
                <div class="ingame-lb-item ${rankClass}">
                    <span class="ingame-lb-rank">${isTop3 ? rankIcons[i] : (i + 1)}</span>
                    <span class="ingame-lb-name">${entry.nickname || '???'}</span>
                    <span class="ingame-lb-score">${entry.attempts ?? '-'} ${t('lb_attempt')}</span>
                </div>`;
            }).join('');
        } else {
            list.innerHTML = `<div class="lb-empty">${t('lb_empty')}</div>`;
        }
    } catch (e) {
        list.innerHTML = `<div class="lb-error">${t('lb_error')}</div>`;
    }
}

// ==================== PLAYER PROFILE SYSTEM ====================

// Open nickname modal (for new registration only)
function openNicknameModal() {
    // Reset modal state
    document.getElementById('code-input-container').classList.add('hidden');
    document.getElementById('code-display-container').classList.add('hidden');
    document.getElementById('forgot-code-link')?.classList.add('hidden');
    document.getElementById('nickname-modal-message').textContent = t('nickname_prompt');
    ui.nicknameInput.value = '';
    ui.nicknameInput.style.display = '';
    ui.nicknameInput.disabled = false;
    ui.nicknameSubmit.style.display = '';
    ui.nicknameSkip.style.display = '';
    document.getElementById('code-input').value = '';
    
    ui.nicknameModal.classList.remove('hidden');
}

// Normalize nickname (same as server)
function normalizeNickname(nickname) {
    if (!nickname) return '';
    return nickname
        .trim()
        .toLowerCase()
        .replace(/^@+/, '')
        .replace(/\s+/g, ' ');
}

// Load and display player profile
function updateProfileUI() {
  const storedNickname = localStorage.getItem('s4dle_player_nickname');
  const storedCode = localStorage.getItem('s4dle_player_code');

  // ✅ Fallback: bazen header farklı yerde oluyor
  const nicknameEl =
    document.getElementById('profile-nickname') ||
    document.querySelector('.profile-nickname') ||
    document.querySelector('[data-role="profile-nickname"]');

  const codeEl =
    document.getElementById('profile-code') ||
    document.querySelector('.profile-code') ||
    document.querySelector('[data-role="profile-code"]');

  if (!nicknameEl || !codeEl) return;

  if (!storedNickname) {
    nicknameEl.textContent = t('profile_guest');
    codeEl.textContent = '-';
    codeEl.classList.remove('has-code');
    codeEl.dataset.code = '';
    return;
  }

  nicknameEl.textContent = storedNickname;

  if (storedCode) {
    codeEl.textContent = `${t('profile_code_label')}: ${storedCode}`;
    codeEl.classList.add('has-code');
    codeEl.dataset.code = storedCode;
  } else {
    codeEl.textContent = '-';
    codeEl.classList.remove('has-code');
    codeEl.dataset.code = '';
  }
}

async function loadPlayerProfile() {
  // önce local state'i bas (geçici)
  updateProfileUI();

  const playerId = getPlayerId();
  if (!playerId) return;

  try {
    const res = await fetch(`${API_BASE}/player/profile?playerId=${encodeURIComponent(playerId)}`);
    const data = await res.json();

    if (data && data.success) {
      // Server nickname ALWAYS wins (admin değiştirmiş olabilir)
      if (data.nickname) localStorage.setItem('s4dle_player_nickname', data.nickname);
      if (data.code) localStorage.setItem('s4dle_player_code', data.code);
      updateProfileUI();
    } else if (data && data.error === 'NOT_FOUND') {
      // Server'da hesap YOK (admin silmiş)
      // localStorage'daki eski veriyi temizle
      const hadAccount = !!localStorage.getItem('s4dle_player_nickname');
      localStorage.removeItem('s4dle_player_nickname');
      localStorage.removeItem('s4dle_player_code');
      localStorage.removeItem(PLAYER_ID_KEY);
      
      // Sadece DAHA ÖNCE hesabı OLAN kullanıcı için oyun sıfırla
      if (hadAccount) {
          clearAllGameProgress();
      }
      
      updateProfileUI();
      // NOT: reload yapmıyoruz - sonsuz döngü yaratır (yeni ziyaretçi = NOT_FOUND = reload = NOT_FOUND...)
    }
  } catch (e) {
    // offline vs: sessiz geç
  }
}

// Copy code to clipboard
function copyCode() {
    const code = localStorage.getItem('s4dle_player_code');
    if (!code) return;
    navigator.clipboard.writeText(code).then(() => {
        showNotification((t('copied') || 'Copied') + ': ' + code, 'success');
    }).catch(() => {
        // ignore
    });
}
window.copyCode = copyCode;

// ==================== CLASSIC MODE: PROGRESSIVE HINTS ====================

// Hintleri sıfırla (oyun başında)
function resetClassicHints() {
    const hintIds = ['hint-a', 'hint-b', 'hint-c', 'hint-d'];
    const defaultTexts = [
        t('hint_locked') || '🔒 2 yanlış tahminden sonra açılır',
        t('hint_locked') || '🔒 4 yanlış tahminden sonra açılır', 
        t('hint_locked') || '🔒 6 yanlış tahminden sonra açılır',
        t('hint_locked') || '🔒 8 yanlış tahminden sonra açılır'
    ];
    
    hintIds.forEach((id, index) => {
        const hintEl = document.getElementById(id);
        if (!hintEl) return;
        
        hintEl.classList.remove('unlocked');
        const iconEl = hintEl.querySelector('.hint-icon-small');
        const textEl = hintEl.querySelector('.hint-text-small');
        
        if (iconEl) iconEl.textContent = '🔒';
        if (textEl) textEl.textContent = defaultTexts[index];
    });
}

function updateClassicHints(wrongGuessCount) {
  // wrongGuessCount: yanlış tahmin sayısı
  const hints = [
    {
      threshold: 2,
      id: "hint-a",
      icon: "🔤",
      getContent: () => {
        const name = (targetItem?.name || "").trim();
        if (!name) return t("hint_missing") || "N/A";
        const firstChar = name[0]?.toUpperCase() || "?";
        return `${t("hint_starts_with") || "Starts with"}: ${firstChar}`;
      }
    },
    {
      threshold: 4,
      id: "hint-b",
      icon: "🔢",
      getContent: () => {
        // zaten sağda tablo var ama burada daha anlamlı: harf sayısı
        const name = (targetItem?.name || "").trim();
        if (!name) return t("hint_missing") || "N/A";
        const len = name.replace(/\s+/g, "").length;
        return `${t("hint_length") || "Length"}: ${len}`;
      }
    },
    {
      threshold: 6,
      id: "hint-c",
      icon: "🧩",
      getContent: () => {
        // harf maskesi: A _ _ _ E gibi
        const name = (targetItem?.name || "").trim().toUpperCase();
        if (!name) return t("hint_missing") || "N/A";
        const chars = name.split("");
        const masked = chars.map((c, i) => {
          if (!/[A-Z0-9]/.test(c)) return c;         // boşluk/işaret
          if (i === 0 || i === chars.length - 1) return c; // ilk/son harf açık
          return "_";
        }).join("");
        return `${t("hint_mask") || "Mask"}: ${masked}`;
      }
    },
    {
      threshold: 8,
      id: "hint-d",
      icon: "🔀",
      getContent: () => {
        // harfleri karıştır
        const name = (targetItem?.name || "").trim();
        if (!name) return t("hint_missing") || "N/A";
        const letters = name.replace(/[^a-zA-Z0-9]/g, "").toUpperCase().split("");
        for (let i = letters.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [letters[i], letters[j]] = [letters[j], letters[i]];
        }
        return `${t("hint_shuffle") || "Shuffled"}: ${letters.join(" ")}`;
      }
    }
  ];

  hints.forEach(hint => {
    const hintEl = document.getElementById(hint.id);
    if (!hintEl) return;

    if (wrongGuessCount >= hint.threshold) {
      const iconEl = hintEl.querySelector(".hint-icon-small");
      const textEl = hintEl.querySelector(".hint-text-small");
      if (!iconEl || !textEl) return;

      iconEl.textContent = hint.icon;
      textEl.textContent = hint.getContent();
      hintEl.classList.add("unlocked");
    }
  });
}

// Emoji mode progressive hints
function updateEmojiHints(wrongGuessCount) {
    if (!targetItem) return;
    
    const hints = [
        {
            threshold: 2,
            id: 'emoji-hint-1',
            icon: '🏷️',
            getContent: () => `${t('hint_emoji_1') || 'Tür'}: ${targetItem.type || '?'}`
        },
        {
            threshold: 4,
            id: 'emoji-hint-2',
            icon: '🎯',
            getContent: () => `${t('hint_emoji_2') || 'Menzil'}: ${targetItem.range || '?'}`
        },
        {
            threshold: 6,
            id: 'emoji-hint-3',
            icon: '🔤',
            getContent: () => {
                const name = (targetItem.name || '').trim();
                if (!name) return '?';
                return `${t('hint_emoji_5') || 'İlk harf'}: ${name[0].toUpperCase()}`;
            }
        }
    ];
    
    hints.forEach(hint => {
        const el = document.getElementById(hint.id);
        if (!el) return;
        
        if (wrongGuessCount >= hint.threshold) {
            const iconEl = el.querySelector('.emoji-hint-icon');
            const textEl = el.querySelector('.emoji-hint-text');
            if (iconEl) iconEl.textContent = hint.icon;
            if (textEl) textEl.textContent = hint.getContent();
            el.classList.remove('locked');
            el.classList.add('unlocked');
        }
    });
}
async function registerPlayer(nickname) {
    try {
        const res = await fetch(`${API_BASE}/player/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                playerId: getPlayerId(),
                nickname: nickname
            })
        });

        const data = await res.json();

        if (data.success) {
            // Save nickname and code (code is the 4-digit ownership code)
            // Keep the user's chosen nickname as the source of truth on this device.
// Some servers may return an existing/auto nickname for a given playerId; we don't want UI to revert.
localStorage.setItem('s4dle_player_nickname', nickname);
if (data.code) localStorage.setItem('s4dle_player_code', data.code);

            // Update UI immediately
            updateProfileUI();

            showNotification(t('register_success'), 'success');
            return { success: true, code: data.code };
        }

        if (data.error === 'NICKNAME_TAKEN') {
            // Don't show score-related errors here; UI will handle showing code input
            return { success: false, error: 'NICKNAME_TAKEN' };
        }

        if (data.error === 'ALREADY_REGISTERED') {
            showNotification(t('already_registered'), 'error');
            return { success: false, error: 'ALREADY_REGISTERED' };
        }

        showNotification(data.message || t('register_failed'), 'error');
        return { success: false };
    } catch (e) {
        showNotification(t('register_failed'), 'error');
        return { success: false };
    }
}

// Login with nickname + code
async function loginPlayer(nickname, code) {
    try {
        const res = await fetch(`${API_BASE}/player/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nickname: nickname,
                code: code,
                newPlayerId: getPlayerId()
            })
        });

        const data = await res.json();

        if (data.success) {
            // Replace local playerId with the one from server
            if (data.playerId) localStorage.setItem(PLAYER_ID_KEY, data.playerId);
            // Keep the user's chosen nickname as the source of truth on this device.
// Some servers may return an existing/auto nickname for a given playerId; we don't want UI to revert.
localStorage.setItem('s4dle_player_nickname', nickname);
if (data.code) localStorage.setItem('s4dle_player_code', data.code);

            updateProfileUI();
            showNotification(t('login_success'), 'success');
            return { success: true };
        }

        showNotification(data.message || t('code_invalid'), 'error');
        return { success: false };
    } catch (e) {
        showNotification(t('login_failed'), 'error');
        return { success: false };
    }
}

    async function handleNicknameSave(e) {
    // Refresh'i kesinlikle engelle
    if (e && typeof e.preventDefault === 'function') {
        e.preventDefault();
        e.stopPropagation();
    }
    
    playSound('click');

    const raw = (ui.nicknameInput && ui.nicknameInput.value) ? ui.nicknameInput.value : '';
    const nickname = raw
        .normalize('NFKC')
        .replace(/\s+/g, ' ')
        .trim();

    const codeContainer = document.getElementById('code-input-container');
    const codeInput = document.getElementById('code-input');
    const code = codeInput ? codeInput.value.trim() : '';
    const isLoginFlow = codeContainer && !codeContainer.classList.contains('hidden');

    // Validate nickname
    if (!nickname) {
        showNotification(t('nickname_required'), 'error');
        return;
    }
    if (nickname.length < 1 || nickname.length > 16) {
        showNotification(t('nickname_required'), 'error');
        return;
    }

    // Zaten kayıtlı kullanıcı nick değiştiremez
    const existingCode = localStorage.getItem('s4dle_player_code');
    const existingNick = localStorage.getItem('s4dle_player_nickname');
    if (existingCode && existingNick && !isLoginFlow) {
        showNotification(t('nick_change_blocked') || 'Nickname değiştirilemez!', 'error');
        return;
    }

    // Login flow (nickname already taken on server)
    if (isLoginFlow) {
        if (code.length !== 4 || !/^\d{4}$/.test(code)) {
            showNotification(t('code_required'), 'error');
            return;
        }

        const result = await loginPlayer(nickname, code);
        if (result.success) {
            // Close modal + clean up
            if (ui.nicknameModal) ui.nicknameModal.classList.add('hidden');
            if (codeInput) codeInput.value = '';
            if (codeContainer) codeContainer.classList.add('hidden');
            document.getElementById('forgot-code-link')?.classList.add('hidden');
            
            queueToastAfterReload('success', t('login_success'));
            
            if (isGameOver && currentMode) {
                saveScore();
            }
        } else {
            // Keep modal open for retry
            if (ui.nicknameModal) ui.nicknameModal.classList.remove('hidden');
        }
        return;
    }

    // Registration flow - yeni kayıt
    const result = await registerPlayer(nickname);

    // Nickname already exists => ask for 4-digit code
    if (!result.success && result.error === 'NICKNAME_TAKEN') {
        if (ui.nicknameModal) ui.nicknameModal.classList.remove('hidden');
        const msgEl = document.getElementById('nickname-modal-message');
        if (msgEl) msgEl.textContent = t('nickname_taken') || 'Bu nickname alınmış. Kodunu gir:';
        if (codeContainer) codeContainer.classList.remove('hidden');
        document.getElementById('forgot-code-link')?.classList.remove('hidden');
        if (codeInput) {
            codeInput.value = '';
            codeInput.focus();
        }
        // Nick'i local'e kaydetME - kod doğrulanmadan kayıt yapılmasın
        return;
    }

    // Success path
    if (result.success) {
        if (ui.nicknameModal) ui.nicknameModal.classList.add('hidden');
        localStorage.setItem('s4dle_player_nickname', nickname);
        if (result.code) localStorage.setItem('s4dle_player_code', result.code);
        updateProfileUI();
        
        // Kod göster modal
        showCodeDisplay(result.code);
        
        queueToastAfterReload('success', t('register_success'));
        
        if (isGameOver && currentMode) {
            saveScore();
        }
    }
    
    updateProfileUI();
}

// Kayıt sonrası kodu göster
function showCodeDisplay(code) {
    if (!code) return;
    const codeDisplayContainer = document.getElementById('code-display-container');
    const codeDisplayValue = document.getElementById('code-display-value');
    const codeDisplayMessage = document.getElementById('code-display-message');
    
    if (codeDisplayContainer && codeDisplayValue) {
        codeDisplayMessage.textContent = t('save_code_warning');
        codeDisplayValue.textContent = code;
        codeDisplayContainer.classList.remove('hidden');
        
        // Modalı tekrar aç kod göstermek için
        ui.nicknameModal.classList.remove('hidden');
        ui.nicknameInput.disabled = true;
        document.getElementById('nickname-modal-message').textContent = t('register_success');
        ui.nicknameSubmit.style.display = 'none';
        ui.nicknameSkip.style.display = 'none';
    }
}

// Profil bilgi modalı (kayıtlı kullanıcılar için)
function openProfileInfoModal() {
    const nick = localStorage.getItem('s4dle_player_nickname') || t('profile_guest');
    const code = localStorage.getItem('s4dle_player_code') || '-';
    
    // Modal'ı bilgi modunda aç
    document.getElementById('nickname-modal-message').innerHTML = 
        '<div style="margin-bottom:16px">' +
        '<div style="font-size:0.85rem;color:var(--text-sub);margin-bottom:4px">Nickname</div>' +
        '<div style="font-size:1.4rem;font-weight:800;color:var(--primary);font-family:Orbitron,monospace">' + nick + '</div>' +
        '</div>' +
        '<div style="margin-bottom:8px">' +
        '<div style="font-size:0.85rem;color:var(--text-sub);margin-bottom:4px">' + (t('profile_code_label') || 'Kodun') + '</div>' +
        '<div style="font-size:1.8rem;font-weight:900;color:var(--primary);font-family:Orbitron,monospace;letter-spacing:6px">' + code + '</div>' +
        '</div>' +
        // PIN Değiştir bölümü
        '<div id="pin-change-section" style="margin-top:16px;padding-top:14px;border-top:1px solid var(--border)">' +
        '<div style="cursor:pointer;color:var(--primary);font-size:0.85rem;font-weight:600" onclick="togglePinChange()">' +
        '🔄 ' + (t('change_pin') || 'PIN Değiştir') +
        '</div>' +
        '<div id="pin-change-form" style="display:none;margin-top:12px">' +
        '<input type="text" id="pin-current" maxlength="4" placeholder="' + (t('current_code') || 'Mevcut kod') + '" pattern="[0-9]*" inputmode="numeric" style="width:100%;padding:10px;background:rgba(6,11,24,0.7);border:1px solid var(--border);border-radius:8px;color:var(--text-main);font-size:0.95rem;text-align:center;margin-bottom:8px;font-family:Orbitron,monospace;letter-spacing:4px">' +
        '<input type="text" id="pin-new" maxlength="4" placeholder="' + (t('new_code') || 'Yeni 4 haneli kod') + '" pattern="[0-9]*" inputmode="numeric" style="width:100%;padding:10px;background:rgba(6,11,24,0.7);border:1px solid var(--border);border-radius:8px;color:var(--text-main);font-size:0.95rem;text-align:center;margin-bottom:10px;font-family:Orbitron,monospace;letter-spacing:4px">' +
        '<button onclick="submitPinChange()" style="width:100%;padding:10px;background:linear-gradient(135deg,var(--primary),#0077cc);border:none;border-radius:8px;color:#000;font-weight:700;cursor:pointer;font-size:0.9rem">' + (t('save_new_pin') || 'Kaydet') + '</button>' +
        '</div>' +
        '</div>' +
        // Kysen linki
        '<div style="font-size:0.8rem;color:var(--text-muted);margin-top:14px">' +
        '<a href="https://xero.gg/chat/thread/Kysen" target="_blank" style="color:var(--primary);text-decoration:none">' +
        '✏️ ' + (t('nick_change_request') || 'Nickname değiştirmek mi istiyorsun?') +
        '</a></div>';
    
    ui.nicknameInput.style.display = 'none';
    ui.nicknameSubmit.style.display = 'none';
    ui.nicknameSkip.style.display = 'none';
    document.getElementById('code-input-container').classList.add('hidden');
    document.getElementById('code-display-container').classList.add('hidden');
    document.getElementById('forgot-code-link')?.classList.add('hidden');
    
    ui.nicknameModal.classList.remove('hidden');
}

function togglePinChange() {
    const form = document.getElementById('pin-change-form');
    if (form) form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

async function submitPinChange() {
    const currentCode = document.getElementById('pin-current')?.value.trim();
    const newCode = document.getElementById('pin-new')?.value.trim();

    if (!currentCode || !/^\d{4}$/.test(currentCode)) {
        showNotification(t('code_required') || 'Mevcut kodu gir', 'error');
        return;
    }
    if (!newCode || !/^\d{4}$/.test(newCode)) {
        showNotification(t('invalid_new_code') || 'Yeni kod 4 haneli olmalı', 'error');
        return;
    }

    try {
        const res = await fetch(`${API_BASE}/player/change-code`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                playerId: getPlayerId(),
                currentCode,
                newCode
            })
        });
        const data = await res.json();

        if (data.success) {
            localStorage.setItem('s4dle_player_code', newCode);
            showNotification(t('pin_changed') || 'PIN değiştirildi!', 'success');
            ui.nicknameModal.classList.add('hidden');
        } else if (data.error === 'WRONG_CODE') {
            showNotification(t('wrong_code') || 'Mevcut kod yanlış', 'error');
        } else {
            showNotification(data.message || t('register_failed'), 'error');
        }
    } catch (e) {
        showNotification(t('register_failed'), 'error');
    }
}

async function saveScore() {
    try {
        const res = await fetch(`${API_BASE}/submit`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                playerId: getPlayerId(),
                mode: currentMode,
                attempts: guesses.length,
                won: true
            })
        });

        const data = await res.json();
        if (data.success) {
            showNotification(t('notif_saved'), 'success');
            loadInGameLeaderboard(currentMode);
            loadMenuLeaderboard();
        } else if (data.error === 'NOT_REGISTERED') {
            showNotification(t('not_registered'), 'error');
            // Show registration modal
            setTimeout(() => ui.nicknameModal.classList.remove('hidden'), 500);
        } else if (res.status === 409) {
            showNotification(t('notif_duplicate'), 'info');
        } else {
            showNotification(t('score_save_failed'), 'error');
        }
    } catch (e) {
        showNotification(t('score_save_failed'), 'error');
    }
}

// ==================== COUNTDOWN (SERVER-SYNCED) ====================

let serverTimeOffset = 0; // server ile client arasındaki fark (ms)

async function syncServerTime() {
    try {
        const clientBefore = Date.now();
        const res = await fetch(`${API_BASE}/time`);
        const data = await res.json();
        const clientAfter = Date.now();
        
        // RTT'nin yarısını ekle (daha doğru offset)
        const rtt = (clientAfter - clientBefore) / 2;
        const serverMs = new Date(data.serverTimestamp).getTime() + rtt;
        serverTimeOffset = serverMs - clientAfter;
        
        // Server'dan gelen bugünün tarihini kaydet
        if (data.today) {
            const storedDay = localStorage.getItem('s4dle_server_day');
            if (storedDay && storedDay !== data.today) {
                // Gün değişmiş — ama sadece 1 kez yenile (loop koruması)
                const lastReload = sessionStorage.getItem('s4dle_day_reload');
                if (lastReload !== data.today) {
                    localStorage.setItem('s4dle_server_day', data.today);
                    sessionStorage.setItem('s4dle_day_reload', data.today);
                    setTimeout(() => location.reload(), 500);
                    return;
                }
            }
            localStorage.setItem('s4dle_server_day', data.today);
        }
    } catch (e) {
        // Offline — client saatini kullan (offset 0)
    }
}

function getServerNow() {
    return new Date(Date.now() + serverTimeOffset);
}

function startCountdown() {
    // İlk sync
    syncServerTime().then(() => {
        updateCountdown();
        setInterval(updateCountdown, 1000);
        // Her 5 dakikada bir server zamanını tekrar sync et
        setInterval(syncServerTime, 5 * 60 * 1000);
    });
}

function updateCountdown() {
    // Server-synced Türkiye saatini al
    const serverNow = getServerNow();
    const turkeyTime = new Date(serverNow.toLocaleString('en-US', { timeZone: 'Europe/Istanbul' }));
    
    // Türkiye saatine göre yarının 00:00
    const tomorrow = new Date(turkeyTime);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    const diff = Math.max(0, tomorrow - turkeyTime);
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    const timer = document.getElementById('next-game-timer');
    if (timer) {
        timer.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
    
    // Gece yarısı → sayfayı yenile (sadece 1 kez)
    if (hours === 0 && minutes === 0 && seconds <= 1) {
        if (!sessionStorage.getItem('s4dle_midnight_reload')) {
            sessionStorage.setItem('s4dle_midnight_reload', '1');
            setTimeout(() => location.reload(), 1500);
        }
    } else {
        // Gece yarısı geçtikten sonra flag'i temizle
        sessionStorage.removeItem('s4dle_midnight_reload');
    }
}

// ==================== NOTIFICATIONS ====================

// ==================== HUD TOAST SYSTEM ====================
const toastQueue = [];
let toastIsShowing = false;

// Pending toast key for localStorage
const PENDING_TOAST_KEY = 's4dle_pending_toast';

// Queue toast for after reload (fallback mechanism)
function queueToastAfterReload(type, message, ttlMs = 10000) {
    try {
        const pendingToast = {
            type: type,
            message: message,
            ts: Date.now(),
            ttl: ttlMs
        };
        localStorage.setItem(PENDING_TOAST_KEY, JSON.stringify(pendingToast));
    } catch (e) {
        // localStorage error, silently ignore
    }
}

// Show pending toast if exists (called on page load)
function showPendingToastIfAny() {
    try {
        const raw = localStorage.getItem(PENDING_TOAST_KEY);
        if (!raw) return;
        
        // Immediately remove to prevent showing again
        localStorage.removeItem(PENDING_TOAST_KEY);
        
        const pending = JSON.parse(raw);
        if (!pending || !pending.message) return;
        
        // Check if expired
        const now = Date.now();
        const age = now - (pending.ts || 0);
        const ttl = pending.ttl || 10000;
        
        if (age > ttl) {
            // Expired, don't show
            return;
        }
        
        // Show the toast using existing system
        showNotification(pending.message, pending.type || 'info');
        
    } catch (e) {
        // JSON parse error or other, clean up and ignore
        try { localStorage.removeItem(PENDING_TOAST_KEY); } catch (e2) {}
    }
}

function showNotification(message, type = 'info') {
    enqueueToast(message, type);
}

function enqueueToast(message, type = 'info', durationMs = 2800) {
    if (!message) return;
    toastQueue.push({ message: String(message), type, durationMs });
    if (!toastIsShowing) renderNextToast();
}

function getToastIcon(type) {
    switch (type) {
        case 'success': return '✓';
        case 'error': return '✕';
        case 'warning': return '⚠';
        default: return 'ℹ';
    }
}

function getToastTitle(type) {
    switch (type) {
        case 'success': return t('toast_success') || 'Success';
        case 'error': return t('toast_error') || 'Error';
        case 'warning': return t('toast_warning') || 'Warning';
        default: return t('toast_info') || 'Info';
    }
}

function ensureToastRoot() {
    let root = document.getElementById('toast-root');
    if (!root) {
        root = document.createElement('div');
        root.id = 'toast-root';
        root.className = 'toast-root';
        root.setAttribute('aria-live', 'polite');
        root.setAttribute('aria-atomic', 'true');
        document.body.appendChild(root);
    }
    return root;
}

function renderNextToast() {
    if (toastQueue.length === 0) {
        toastIsShowing = false;
        return;
    }

    toastIsShowing = true;

    const { message, type, durationMs } = toastQueue.shift();
    const root = ensureToastRoot();

    const toast = document.createElement('div');
    const safeType = ['success', 'error', 'warning', 'info'].includes(type) ? type : 'info';
    toast.className = `toast toast-${safeType}`;

    toast.innerHTML = `
        <span class="toast-icon" aria-hidden="true">${getToastIcon(safeType)}</span>
        <div class="toast-body">
            <div class="toast-title">${getToastTitle(safeType)}</div>
            <div class="toast-msg"></div>
        </div>
    `;
    toast.querySelector('.toast-msg').textContent = message;

    root.appendChild(toast);

    // Animate in
    requestAnimationFrame(() => toast.classList.add('show'));

    const hide = () => {
        toast.classList.add('hide');
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
            toastIsShowing = false;
            renderNextToast();
        }, 260);
    };

    setTimeout(hide, Math.max(2500, Math.min(3200, durationMs)));
}
