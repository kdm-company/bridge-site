'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

export function ContactForm() {
  const [ready, setReady] = useState(false);
  const [review, setReview] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [fields, setFields] = useState({
    company: '',
    name: '',
    email: '',
    message: '',
  });
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => setReady(true), []);
  useEffect(() => {
    if (review) heading.current?.focus();
  }, [review]);
  function confirm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (agreed) setReview(true);
  }
  return (
    <div className="contact-form-area">
      <div className="form-notice" id="form-notice">
        <strong>オンライン窓口は開設準備中です。</strong>
        <p>
          現在は入力内容の確認までお試しいただけます。お問い合わせは送信されません。入力内容のサーバーへの送信・保存も行いません。
        </p>
      </div>
      {review ? (
        <div className="contact-review">
          <h2 tabIndex={-1} ref={heading}>
            入力内容の確認
          </h2>
          <p className="review-status" role="status">
            内容を確認しています。まだ送信されていません。
          </p>
          <dl className="company-facts">
            {(
              [
                ['company', '会社名'],
                ['name', 'お名前'],
                ['email', 'メールアドレス'],
                ['message', 'ご相談内容'],
              ] as const
            ).map(([key, label]) => (
              <div key={key}>
                <dt>{label}</dt>
                <dd>{fields[key]}</dd>
              </div>
            ))}
          </dl>
          <div className="form-actions">
            <Button
              type="button"
              variant="outline"
              className="form-button"
              onClick={() => setReview(false)}
            >
              入力内容を修正する
            </Button>
            <Button type="button" disabled className="form-button">
              送信準備中
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={confirm} aria-describedby="form-notice">
          <fieldset disabled={!ready}>
            <legend className="sr-only">お問い合わせ情報</legend>
            <p className="required-description">
              <span>必須</span> の項目をご入力ください。
            </p>
            {(
              [
                ['company', '会社名', 'organization'],
                ['name', 'お名前', 'name'],
                ['email', 'メールアドレス', 'email'],
              ] as const
            ).map(([key, label, autocomplete]) => (
              <div className="form-field" key={key}>
                <Label htmlFor={`contact-${key}`}>
                  {label}
                  <span className="required-label">必須</span>
                </Label>
                <Input
                  id={`contact-${key}`}
                  name={key}
                  type={key === 'email' ? 'email' : 'text'}
                  autoComplete={autocomplete}
                  required
                  maxLength={key === 'email' ? 254 : 120}
                  pattern={key === 'email' ? undefined : '.*\\S.*'}
                  value={fields[key]}
                  onChange={(event) =>
                    setFields({ ...fields, [key]: event.target.value })
                  }
                  className="contact-input"
                />
              </div>
            ))}
            <div className="form-field">
              <Label htmlFor="contact-message">
                ご相談内容<span className="required-label">必須</span>
              </Label>
              <Textarea
                id="contact-message"
                name="message"
                required
                maxLength={5000}
                value={fields.message}
                onChange={(event) =>
                  setFields({ ...fields, message: event.target.value })
                }
                className="contact-input contact-textarea"
              />
              <p className="field-help">
                現在の課題、ご相談したいことなどをご記入ください。
              </p>
            </div>
            <div className="consent-row">
              <Checkbox
                id="contact-consent"
                checked={agreed}
                onCheckedChange={setAgreed}
              />
              <Label htmlFor="contact-consent">
                <span>
                  <Link
                    href="/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-link"
                  >
                    プライバシーポリシー（案・別タブ）
                  </Link>
                  を確認しました。
                </span>
              </Label>
            </div>
            <Button
              type="submit"
              disabled={!agreed || !ready || !fields.message.trim()}
              className="form-button"
            >
              入力内容を確認する
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
          </fieldset>
        </form>
      )}
    </div>
  );
}
