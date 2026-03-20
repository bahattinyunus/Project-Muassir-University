# 🔍 CPoW Analizör: Teknik Şartname & Algoritma Akışı

## 1. Giriş (Introduction)
Sürekli İş İspatı (CPoW) analizörü, öğrencinin GitHub reposunu periyodik olarak tarayan, kod kalitesini, mimari derinliğini ve açık kaynak etkisini ölçen otonom bir "Akademik Değerleme" motorudur. Bu doküman, analizörün mock-up mantığını ve değerlendirme kriterlerini açıklar.

---

## 2. Veri Kaynakları & Entegrasyonlar
Analizör aşağıdaki API'lerden veri çeker:
- **GitHub GraphQL API:** Commit sıklığı, PR sayısı, Issue çözme hızı.
- **SonarQube API:** Kod karmaşıklığı (Cyclomatic Complexity), teknik borç (Technical Debt).
- **ArXiv & Google Scholar API:** (Eğer makale/patent referansı varsa) Alıntı sayısı ve etki faktörü.

---

## 3. Değerlendirme Algoritması (Pseudocode)

```python
def calculate_cpow_score(student_repo_url):
    # 1. Kod Derinliği Analizi
    code_depth = analyze_ast_complexity(student_repo_url) # AST (Abstract Syntax Tree) üzerinden
    
    # 2. Açık Kaynak Etkisi (OSS Impact)
    pull_requests = get_merged_prs(student_repo_url, orgs=["pytorch", "tensorflow", "linux-kernel"])
    oss_score = len(pull_requests) * 50  # Her majör PR 50 puan
    
    # 3. AI-Simülasyon Çıktıları
    simulation_logs = get_ai_simulation_results(student_id)
    stress_resilience = analyze_stress_handling(simulation_logs)
    
    # 4. Final Skor (V(x))
    final_score = (code_depth * 0.3) + (oss_score * 0.4) + (stress_resilience * 0.3)
    
    return final_score
```

---

## 4. Vizyoner Metrikler (Visionary Metrics)
Analizör sadece "kodun çalışıp çalışmadığına" bakmaz; şu "Muassır" metrikleri ölçer:
- **"The Sharpness Factor":** Bir problemi en az satırlı ve en yüksek verimli (Big O) çözümle çözme yeteneği.
- **"The Alignment Score":** Kodun etik standartlara ve AI-Hizalama (AI Alignment) prensiplerine uygunluğu.
- **"Collaborative Intelligence":** Multi-disipliner ekiplerle yapılan commit'lerdeki "Liderlik vs. Destek" dengesi.

---

## 5. Uygulama Planı
Bu analizör, üniversitenin **Otonom Değerlendirme Ağı** üzerinde çalışır ve her öğrenciye ait bir "Canlı Yetkinlik Dashboard'u" besler. Notlar statik değil, repo güncellendikçe değişen dinamik bir yapıdadır.
