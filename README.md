🛡️ Pro Lite SIEM – 

Pro Lite SIEM is a practical Security Information and Event Management (SIEM) platform built with Python and Flask.

📌 Overview

This project simulates how enterprise SIEM systems operate — 
It aggregates logs from multiple sources, normalizes them into a common structure, runs rule-based correlation, and presents the results in a web dashboard with search, filters, and alert summaries.
🚀 Features
1. Multi-Source Log Collection

    Reads logs from:

        Linux authentication logs (/var/log/auth.log)

        Web server logs (Apache/Nginx)

        Optional: Firewall or application logs

    Modular Collector class for easy addition of new log sources.

2. Log Parsing & Normalization

    Extracts key fields: timestamp, IP, username, action, source

    Converts data into a unified JSON format for storage & analysis.

3. Event Correlation & Detection

    Brute Force Detection – Detect 5+ failed logins from the same IP within 2 minutes.

    Suspicious IP Login – Flag logins from blacklisted or foreign countries.

    Odd-Hour Logins – Detect logins between 00:00–05:00.

    SQL Injection & XSS Detection – Regex-based detection in HTTP request logs.

    Sensitive File Access – Detect repeated requests to files like /etc/passwd, /admin, /config.php.

4. Alerting & Summaries

    Each detection generates:

        Severity level (Low/Medium/High)

        AI-style plain English explanation of the event

    Alerts stored in a database for historical tracking.

    Optional: Email or Slack notifications.

5. Interactive Web Dashboard

    Built with Flask + Chart.js / Plotly.

    Features:

        /logs – View searchable, filterable logs.

        /alerts – See alerts with severity filters.

        Graphs – Pie chart of failed vs successful logins, top attacker IPs.

    Mobile-friendly layout.

6. Persistent Storage

    SQLite database for both logs and alerts.

    Query API for the dashboard.
