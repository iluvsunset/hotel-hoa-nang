#!/usr/bin/env python3
"""
HOTEL HOA NẮNG — Adversarial Test Suite Runner Wrapper
======================================================
Executes adversarial stress testing via Node.js runtime and reports structured JSON/CLI output.
"""

import subprocess
import sys
import json
from pathlib import Path

def run_adversarial_suite():
    script_path = Path(__file__).parent / "adversarial_stress_suite.js"
    if not script_path.exists():
        print(f"Error: {script_path} not found.")
        sys.exit(1)

    result = subprocess.run(["node", str(script_path)], capture_output=True, text=True)
    print(result.stdout)
    if result.stderr:
        print(result.stderr, file=sys.stderr)

    report_path = Path(__file__).parent / "adversarial_report.json"
    if report_path.exists():
        try:
            with open(report_path, "r", encoding="utf-8") as f:
                report = json.load(f)
                return report
        except Exception as e:
            print(f"Failed to read report: {e}")

    return None

if __name__ == "__main__":
    report = run_adversarial_suite()
    if report and report.get("failCount", 0) == 0:
        sys.exit(0)
    else:
        sys.exit(1)
