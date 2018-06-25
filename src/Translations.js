const json = {
    'MKs and factions': 'ח"כים וסיעות',
    'Open Knesset': 'כנסת פתוחה',
    'Committees': 'ועדות',
    'Presence': 'נוכחות',
    'Homepage': 'דף הבית',
    'Attendance at committee meetings': 'נוכחות בישיבות ועדה',
    'Presence in parliament': 'נוכחות במשכן',
    'Source code of the data': 'קוד המקור של הנתונים',
    'The data interface of parliamentary information is accessible': 'ממשק הנתונים של מידע פרלמנטרי נגיש',
    'Data coming from': 'הנתונים מגיעים מ',
    'Data is updated daily and updated on this site and other databases and files through a project': 'הנתונים נמשכים בתדירות יומית ומעודכנים באתר זה ובמסדי נתונים וקבצים אחרים באמצעות פרוייקט',
    'The Open Knesset is a project aimed at exposing the Knessets activities to the public': 'כנסת פתוחה הוא פרוייקט שמטרתו לחשוף את פעילות הכנסת לציבור',
    'Workshop for Public Information': 'הסדנא לידע ציבורי',
    'Project of': 'פרוייקט של',
    'Budget develop': 'מפתח התקציב',
    'State Square': 'כיכר המדינה',
    'Open pension': 'פנסיה פתוחה',
    'Contributed to the workshop': 'תרמו לסדנא',
    'Some of the rights are reserved. Use of data from the site subject to credit': 'חלק מהזכויות שמורות. שימוש בנתונים מהאתר בכפוף לקרדיט',
    'The presence of MKs in committee meetings': 'נוכחות ח"כים בישיבות ועדה',
}

export default (key) => (
    json[key] ? json[key] : key
)
