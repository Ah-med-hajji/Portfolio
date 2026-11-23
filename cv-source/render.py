"""Render the four CV PDFs into public/cv/.

    python3 cv-source/render.py

Fonts: Noto Serif TTFs in cv-source/fonts/ (gitignored; download from
github.com/notofonts/notofonts.github.io, fonts/NotoSerif/hinted/ttf).
"""
import os
import sys

from reportlab.lib.colors import HexColor, white
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (BaseDocTemplate, Frame, FrameBreak, KeepTogether, NextPageTemplate,
                                PageTemplate, Paragraph, Spacer, Table, TableStyle)

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import content_global as G  # noqa: E402
import content_trainer as T  # noqa: E402

OUT = os.path.join(HERE, "..", "public", "cv")
W, H = A4

for style, file in [("", "Regular"), ("-Bold", "Bold"), ("-Italic", "Italic"), ("-BoldItalic", "BoldItalic")]:
    pdfmetrics.registerFont(TTFont(f"Noto{style}", os.path.join(HERE, "fonts", f"NotoSerif-{file}.ttf")))
pdfmetrics.registerFontFamily("Noto", normal="Noto", bold="Noto-Bold", italic="Noto-Italic", boldItalic="Noto-BoldItalic")


def esc(s):
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def S(name, **kw):
    base = dict(fontName="Noto", fontSize=8, leading=10.5, textColor=HexColor("#1f2937"))
    base.update(kw)
    return ParagraphStyle(name, **base)


def bullet_list(items, style, mark, mark_color, indent=8):
    st = ParagraphStyle(style.name + "b", parent=style, leftIndent=indent, bulletIndent=0)
    return [Paragraph(f'<font color="{mark_color}"><b>{mark}</b></font>&nbsp;{esc(t)}',
                      ParagraphStyle(style.name + "h", parent=st, firstLineIndent=-indent))
            for t in items]


def two_col(left, right, widths, valign="BOTTOM"):
    t = Table([[left, right]], colWidths=widths)
    t.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), valign), ("LEFTPADDING", (0, 0), (-1, -1), 0),
                           ("RIGHTPADDING", (0, 0), (-1, -1), 0), ("TOPPADDING", (0, 0), (-1, -1), 0),
                           ("BOTTOMPADDING", (0, 0), (-1, -1), 0)]))
    return t


# ─────────────────────────────── Global CV ───────────────────────────────
NAVY, BLUE, TEAL, GREY, INK = "#0b1f33", "#1677ff", "#11a7a0", "#667085", "#1f2937"
M = 32                      # side margin
SIDE_X = 402                # sidebar left edge
SIDE_W = W - M - SIDE_X


def render_global(c, path):
    g = {
        "h": S("gh", fontName="Noto-Bold", fontSize=10.5, leading=13, textColor=HexColor(NAVY)),
        "body": S("gb", fontSize=8, leading=10.6, textColor=HexColor(INK)),
        "role": S("gr", fontName="Noto-Bold", fontSize=9, leading=11.5, textColor=HexColor(NAVY)),
        "meta": S("gm", fontSize=7.5, leading=10, textColor=HexColor(BLUE)),
        "bul": S("gu", fontSize=7.5, leading=10, textColor=HexColor(INK), leftIndent=8),
        "sh": S("gsh", fontName="Noto-Bold", fontSize=8, leading=10, textColor=HexColor(TEAL)),
        "sb": S("gsb", fontSize=7, leading=9.2, textColor=HexColor(INK)),
        "stack": S("gst", fontSize=7, leading=9, textColor=HexColor(TEAL)),
    }

    def heading(text, width):
        t = Table([[Paragraph(esc(text), g["h"])]], colWidths=[width])
        t.setStyle(TableStyle([("LINEBELOW", (0, 0), (-1, -1), 1.4, HexColor(BLUE)),
                               ("LEFTPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
                               ("TOPPADDING", (0, 0), (-1, -1), 0)]))
        return [Spacer(1, 6), t, Spacer(1, 5)]

    def bullets(items):
        return bullet_list(items, g["bul"], "•", BLUE)

    def job(e):
        meta = f'<b>{esc(e["org"])}</b>&nbsp;&nbsp;<font color="#98a2b3">|</font>&nbsp;&nbsp;<i><font color="{GREY}" size="7">{esc(e["period"])}</font></i>'
        return KeepTogether([Paragraph(esc(e["role"]), g["role"]), Paragraph(meta, g["meta"]), Spacer(1, 2)]
                            + bullets(e["points"]) + [Spacer(1, 5)])

    def page1(canv, doc):
        canv.saveState()
        top = H - 26
        canv.setFillColor(HexColor(NAVY)); canv.rect(M, top - 80, W - 2 * M, 80, fill=1, stroke=0)
        canv.setFillColor(white); canv.setFont("Noto-Bold", 24); canv.drawString(M + 12, top - 32, c["name"])
        canv.setFillColor(HexColor("#bcdeff")); canv.setFont("Noto-Bold", 8.6); canv.drawString(M + 12, top - 52, c["headline"])
        canv.setFillColor(HexColor("#7edbd5")); canv.setFont("Noto-Italic", 8); canv.drawString(M + 12, top - 66, c["motto"])
        canv.setFillColor(white); canv.setFont("Noto", 7.5)
        for i, line in enumerate([G.CONTACT["phone"], G.CONTACT["email"], G.CONTACT["linkedin"], c["location"], c["mobility"]]):
            canv.drawRightString(W - M - 12, top - 16 - i * 12.2, line)
        # stats strip
        sy, sw = top - 80 - 30, (W - 2 * M) / 4
        for i, (v, l) in enumerate(c["stats"]):
            canv.setFillColor(HexColor("#eaf2ff" if i % 2 == 0 else "#f3f7fb"))
            canv.rect(M + i * sw, sy, sw, 30, fill=1, stroke=0)
            canv.setFillColor(HexColor(BLUE)); canv.setFont("Noto-Bold", 10.5); canv.drawCentredString(M + i * sw + sw / 2, sy + 16, v)
            canv.setFillColor(HexColor(GREY)); canv.setFont("Noto", 6.8); canv.drawCentredString(M + i * sw + sw / 2, sy + 6, l)
        canv.setFillColor(HexColor("#f7fafc")); canv.rect(SIDE_X - 6, 50, SIDE_W + 6, sy - 56, fill=1, stroke=0)
        footer(canv)
        canv.restoreState()

    def page2(canv, doc):
        canv.saveState()
        top = H - 30
        canv.setFillColor(HexColor(NAVY)); canv.rect(M, top - 32, W - 2 * M, 32, fill=1, stroke=0)
        canv.setFillColor(white); canv.setFont("Noto-Bold", 15); canv.drawString(M + 8, top - 22, c["name"])
        canv.setFillColor(HexColor("#1b3a57")); canv.rect(SIDE_X - 6, top - 32, SIDE_W + 6, 32, fill=1, stroke=0)
        canv.setFillColor(HexColor("#bcdeff")); canv.setFont("Noto-Bold", 6.8); canv.drawRightString(W - M - 8, top - 13, c["p2_label"])
        canv.setFillColor(HexColor("#f7fafc")); canv.rect(SIDE_X - 6, 50, SIDE_W + 6, top - 32 - 56, fill=1, stroke=0)
        footer(canv)
        canv.restoreState()

    def footer(canv):
        canv.setFillColor(HexColor(GREY)); canv.setFont("Noto", 6.5); canv.drawCentredString(W / 2, 28, c["footer"])

    lw = SIDE_X - 14 - M
    f1 = [Frame(M, 50, lw, H - 26 - 110 - 52, id="l1", leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0),
          Frame(SIDE_X, 50, SIDE_W - 6, H - 26 - 110 - 52, id="r1", leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)]
    f2 = [Frame(M, 50, lw, H - 30 - 32 - 58, id="l2", leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0),
          Frame(SIDE_X, 50, SIDE_W - 6, H - 30 - 32 - 58, id="r2", leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)]
    doc = BaseDocTemplate(path, pagesize=A4, title=c["title"], author="Ahmed Hajji", subject=c["headline"],
                          pageTemplates=[PageTemplate("p1", f1, onPage=page1), PageTemplate("p2", f2, onPage=page2)])

    s = []
    s += heading(c["h_profile"], lw) + [Paragraph(esc(c["profile"]), g["body"])]
    s += heading(c["h_experience"], lw) + [job(e) for e in c["experience"]]
    s += [FrameBreak()] + heading(c["h_expertise"], SIDE_W - 6)
    for t, b in c["expertise"]:
        s += [KeepTogether([Paragraph(esc(t), g["sh"]), Paragraph(esc(b), g["sb"]), Spacer(1, 4)])]
    s += [NextPageTemplate("p2"), FrameBreak()]
    # page 2 left
    s += heading(c["h_projects"], lw)
    for p in c["projects"]:
        title = f'{esc(p["name"])}&nbsp;&nbsp;<font color="{BLUE}" size="7.5">{esc(p["year"])}</font>'
        s += [KeepTogether([Paragraph(title, g["role"]), Paragraph(esc(p["stack"]), g["stack"]), Spacer(1, 2)]
                           + bullets(p["points"]) + [Spacer(1, 5)])]
    s += heading(c["h_earlier"], lw) + [job(e) for e in c["earlier"]]
    # page 2 right
    sw = SIDE_W - 6
    s += [FrameBreak()] + heading(c["h_education"], sw)
    for deg, school, years in c["education"]:
        s += [Paragraph(f"<b>{esc(deg)}</b>", S("ed", fontSize=7.8, leading=10, textColor=HexColor(NAVY))),
              Paragraph(esc(school), S("es", fontSize=6.8, leading=9, textColor=HexColor(GREY))),
              Paragraph(f"<b>{years}</b>", S("ey", fontSize=7.5, leading=10, textColor=HexColor(BLUE))), Spacer(1, 4)]
    s += heading(c["h_certs"], sw) + bullet_list(c["certs"], g["sb"], "•", BLUE)
    s += heading(c["h_languages"], sw)
    s += [Paragraph(f'<b>{esc(a)}</b>&nbsp;&nbsp;<font color="{GREY}">{esc(b)}</font>', S("lg", fontSize=7.3, leading=11, textColor=HexColor(NAVY)))
          for a, b in c["languages"]]
    s += heading(c["h_leadership"], sw) + bullet_list(c["leadership"], g["sb"], "•", BLUE)
    s += heading(c["h_toolbox"], sw) + [Paragraph(esc(t), S("tb", fontSize=7, leading=10.5, textColor=HexColor(INK))) for t in c["toolbox"]]
    doc.build(s)


# ─────────────────────────────── Trainer CV ───────────────────────────────
PETROL, AQUA, DARK, MUTED = "#164b6b", "#00a6a6", "#162630", "#5b6b77"


def render_trainer(c, path):
    st = {
        "h": S("th", fontName="Noto-Bold", fontSize=10.5, leading=13, textColor=HexColor(PETROL), spaceBefore=9, spaceAfter=4),
        "body": S("tb", fontSize=8.8, leading=12, textColor=HexColor(DARK)),
        "bul": S("tu", fontSize=8.3, leading=11, textColor=HexColor(DARK), leftIndent=10),
        "cell": S("tc", fontSize=8, leading=10.4, textColor=HexColor(DARK)),
        "lab": S("tl", fontName="Noto-Bold", fontSize=8, leading=10.4, textColor=HexColor(PETROL)),
    }
    CW = W - 2 * 46

    def page(canv, doc):
        canv.saveState()
        canv.setFillColor(HexColor(MUTED)); canv.setFont("Noto", 7.5); canv.drawCentredString(W / 2, 24, c["footer"])
        canv.restoreState()

    def first(canv, doc):
        canv.saveState()
        top, h = H - 34, 96
        canv.setFillColor(HexColor(PETROL)); canv.rect(42, top - h, W - 84, h, fill=1, stroke=0)
        canv.setFillColor(white); canv.setFont("Noto-Bold", 25); canv.drawCentredString(W / 2, top - 30, c["name"])
        canv.setFillColor(HexColor("#a9e5e5")); canv.setFont("Noto-Bold", 10); canv.drawCentredString(W / 2, top - 50, c["headline"])
        canv.setFillColor(white); canv.setFont("Noto", 8.3); canv.drawCentredString(W / 2, top - 66, "   |   ".join(c["contact1"]))
        canv.setFillColor(HexColor("#a9e5e5")); canv.drawCentredString(W / 2, top - 80, "   |   ".join(c["contact2"]))
        canv.restoreState()
        page(canv, doc)

    def bullets(items):
        return bullet_list(items, st["bul"], "›", AQUA, indent=10)

    def entry(e):
        left = Paragraph(f'<font color="{PETROL}" size="9.5"><b>{esc(e["role"])}</b></font>'
                         f'<font color="{AQUA}" size="9"><b> | {esc(e["org"])}</b></font>'
                         f'<font color="{MUTED}" size="8"> - {esc(e["place"])}</font>', st["body"])
        right = Paragraph(f'<i>{esc(e["period"])}</i>', S("per", fontSize=8, alignment=2, textColor=HexColor(MUTED)))
        return KeepTogether([two_col(left, right, [CW - 90, 90]), Spacer(1, 2)] + bullets(e["points"]) + [Spacer(1, 4)])

    def grid(head, rows):
        data = ([[Paragraph(f"<b>{head[0]}</b>", S("x", fontSize=7.5, textColor=white)),
                  Paragraph(f"<b>{head[1]}</b>", S("y", fontSize=7.5, textColor=white))]] if head else [])
        data += [[Paragraph(esc(a), st["lab"]), Paragraph(esc(b), st["cell"])] for a, b in rows]
        t = Table(data, colWidths=[108, CW - 108])
        style = [("VALIGN", (0, 0), (-1, -1), "MIDDLE"), ("LINEBELOW", (0, 0), (-1, -1), 0.5, HexColor("#cfe0e6")),
                 ("TOPPADDING", (0, 0), (-1, -1), 3.5), ("BOTTOMPADDING", (0, 0), (-1, -1), 3.5),
                 ("LEFTPADDING", (0, 0), (-1, -1), 6)]
        if head:
            style += [("BACKGROUND", (0, 0), (-1, 0), HexColor(PETROL)), ("BOX", (0, 0), (-1, -1), 0.5, HexColor("#cfe0e6"))]
        start = 1 if head else 0
        for i in range(start, len(data)):
            if (i - start) % 2 == 0:
                style.append(("BACKGROUND", (0, i), (-1, i), HexColor("#f2f8fa")))
        t.setStyle(TableStyle(style))
        return t

    doc = BaseDocTemplate(path, pagesize=A4, title=c["title"], author="Ahmed Hajji", subject=c["headline"],
                          pageTemplates=[PageTemplate("first", [Frame(46, 40, CW, H - 34 - 96 - 52, leftPadding=0, rightPadding=0, topPadding=0)], onPage=first),
                                         PageTemplate("rest", [Frame(46, 40, CW, H - 80, leftPadding=0, rightPadding=0)], onPage=page)])
    s = [NextPageTemplate("rest")]
    s += [Paragraph(c["h_profile"], st["h"]), Paragraph(esc(c["profile"]), st["body"]), Spacer(1, 7)]
    call = Table([[[Paragraph(f"<b>{esc(c['callout_title'])}</b>", S("ct", fontSize=8.3, leading=11, textColor=HexColor(PETROL))),
                    Paragraph(esc(c["callout"]), S("cb", fontSize=8.5, leading=11.5, textColor=HexColor(DARK)))]]], colWidths=[CW])
    call.setStyle(TableStyle([("BACKGROUND", (0, 0), (-1, -1), HexColor("#eaf4f6")), ("LINEBEFORE", (0, 0), (0, -1), 2.5, HexColor(AQUA)),
                              ("LEFTPADDING", (0, 0), (-1, -1), 10), ("TOPPADDING", (0, 0), (-1, -1), 6), ("BOTTOMPADDING", (0, 0), (-1, -1), 7)]))
    s += [call]
    s += [Paragraph(c["h_expertise"], st["h"]), grid(c["table_head"], c["expertise"])]
    s += [Paragraph(c["h_training"], st["h"])] + [entry(e) for e in c["training"]]
    certs = c["ai_certs"]
    rows = [[Paragraph(f'<font color="{AQUA}"><b>›</b></font>&nbsp;{esc(certs[i])}', st["cell"]),
             Paragraph(f'<font color="{AQUA}"><b>›</b></font>&nbsp;{esc(certs[i + 1])}', st["cell"]) if i + 1 < len(certs) else ""]
            for i in range(0, len(certs), 2)]
    ct = Table(rows, colWidths=[CW / 2] * 2)
    ct.setStyle(TableStyle([("LINEBELOW", (0, 0), (-1, -1), 0.5, HexColor("#cfe0e6")), ("VALIGN", (0, 0), (-1, -1), "TOP"),
                            ("LEFTPADDING", (0, 0), (-1, -1), 2), ("TOPPADDING", (0, 0), (-1, -1), 3), ("BOTTOMPADDING", (0, 0), (-1, -1), 3)]))
    s += [KeepTogether([Paragraph(c["h_ai_certs"], st["h"]), ct])]
    s += [Paragraph(c["h_experience"], st["h"])] + [entry(e) for e in c["experience"]]
    s += [KeepTogether([Paragraph(c["h_skills"], st["h"]), grid(None, c["skills"])])]
    s += [Paragraph(c["h_devops_certs"], st["h"])] + bullets(c["devops_certs"])
    s += [Paragraph(c["h_education"], st["h"])]
    for deg, school, place, years in c["education"]:
        left = Paragraph(f'<font color="{PETROL}" size="9.5"><b>{esc(deg)}</b></font><br/>'
                         f'<font color="{AQUA}" size="8.5"><b>{esc(school)}</b></font><font color="{MUTED}" size="8"> - {esc(place)}</font>', st["body"])
        right = Paragraph(f"<i>{years}</i>", S("per", fontSize=8, alignment=2, textColor=HexColor(MUTED)))
        s += [two_col(left, right, [CW - 90, 90]), Spacer(1, 5)]
    langs = '&nbsp;&nbsp;<font color="#9aa9b3">|</font>&nbsp;&nbsp;'.join(
        f'<font color="{PETROL}"><b>{esc(a)} :</b></font> {esc(b)}' if c["lang"] == "fr" else f'<font color="{PETROL}"><b>{esc(a)}:</b></font> {esc(b)}'
        for a, b in c["languages"])
    s += [Paragraph(c["h_languages"], st["h"]), Paragraph(langs, st["body"])]
    doc.build(s)


if __name__ == "__main__":
    os.makedirs(OUT, exist_ok=True)
    jobs = [(render_global, G.EN, "Ahmed_Hajji_CV_EN.pdf"), (render_global, G.FR, "Ahmed_Hajji_CV_FR.pdf"),
            (render_trainer, T.EN, "Ahmed_Hajji_Trainer_CV_EN.pdf"), (render_trainer, T.FR, "Ahmed_Hajji_Trainer_CV_FR.pdf")]
    for fn, content, name in jobs:
        fn(content, os.path.join(OUT, name))
        print("wrote", name)
