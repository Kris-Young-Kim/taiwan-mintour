import Link from "next/link";
import { Phone, Mail, MessageCircle, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "여행 정보": [
      { label: "일정", href: "#itinerary" },
      { label: "호텔", href: "#hotel" },
      { label: "가격", href: "#" },
      { label: "예약", href: "#" },
    ],
    "회사 정보": [
      { label: "민투어 소개", href: "#" },
      { label: "20년의 경험", href: "#" },
      { label: "자주 묻는 질문", href: "#" },
      { label: "채용정보", href: "#" },
    ],
    "법률 정보": [
      { label: "개인정보 처리방침", href: "#" },
      { label: "이용약관", href: "#" },
      { label: "환불 정책", href: "#" },
    ],
  };

  const contact = [
    { icon: Phone, label: "전화", value: "033-742-8053/010-4766-8053" }, // Updated phone number from 02-1234-5678 to 033-742-8053
    { icon: Mail, label: "이메일", value: "mintour@gmail.com" },
    { icon: MessageCircle, label: "카카오톡", value: "@MINTOUR" },
  ];

  return (
    <footer id="contact" className="border-t border-border bg-muted/40">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl text-primary mb-4"
            >
              <div className="h-8 w-8 rounded bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                민
              </div>
              <span>민투어</span>
            </Link>
            <p className="text-sm text-foreground/60 mb-4">
              패키지 여행 전문여행사. 
              신뢰할 수 있는 여행, 특별한 경험을 약속합니다.
            </p>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/60 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="border-t border-border pt-8 mb-8">
          <h3 className="font-semibold text-foreground mb-4">고객센터</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {contact.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-start gap-3">
                  <Icon className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-xs text-foreground/60 mb-1">
                      {item.label}
                    </p>
                    <p className="font-semibold text-foreground">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-xs text-foreground/60 mt-4">
            운영시간: 평일 09:00-18:00
          </p>
        </div>

        {/* SNS Links */}
        <div className="border-t border-border pt-8 mb-8">
          <h3 className="font-semibold text-foreground mb-4">소셜 미디어</h3>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors"
              aria-label="페이스북"
            >
              <Facebook size={20} />
              <span className="text-sm">페이스북</span>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors"
              aria-label="인스타그램"
            >
              <Instagram size={20} />
              <span className="text-sm">인스타그램</span>
            </a>
            <a
              href="https://pf.kakao.com/_MINTOUR"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors"
              aria-label="카카오톡 채널"
            >
              <MessageCircle size={20} />
              <span className="text-sm">카카오톡 채널</span>
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/60">
            © {currentYear} 민투어. All rights reserved.
          </p>
          <p className="text-sm text-foreground/60">
            여행약관 | 개인정보 처리방침 | 이용약관
          </p>
        </div>
      </div>
    </footer>
  );
}
