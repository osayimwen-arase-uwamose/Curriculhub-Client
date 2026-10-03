import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useHubs from "../../../hooks/useHubs.js";

const MAX_TITLE_LENGTH = 150;
const MAX_DESCRIPTION_LENGTH = 1000;

const CreateHubForm = ({ onCancel }) => { 
  const {
    createHub,
    creating,
    createError,
  } = useHubs();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    visibility: "private",
    status: "draft",
    maxMembers: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: "",
    }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!formData.title.trim()) {
      nextErrors.title = "Hub title is required.";
    }

    if (formData.title.trim().length > MAX_TITLE_LENGTH) {
      nextErrors.title = `Hub title cannot exceed ${MAX_TITLE_LENGTH} characters.`;
    }

    if (!formData.description.trim()) {
      nextErrors.description = "Hub description is required.";
    }

    if (
      formData.description.trim().length >
      MAX_DESCRIPTION_LENGTH
    ) {
      nextErrors.description =
        `Description cannot exceed ${MAX_DESCRIPTION_LENGTH} characters.`;
    }

    if (
      formData.maxMembers !== "" &&
      (!Number.isInteger(Number(formData.maxMembers)) ||
        Number(formData.maxMembers) < 1)
    ) {
      nextErrors.maxMembers =
        "Maximum members must be an integer greater than or equal to 1.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validate()) {
      return;
    };
    
    console.log(formData)
    const response = await createHub(formData);

    const hub = response?.data?.hub ?? response?.hub ?? response?.data;

    if (hub?._id || hub?.id) {
      const hubId = hub._id || hub.id;

      navigate(`/hubs/${hubId}`);
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div className="border border-on-background bg-surface shadow-neo">
      {/* Form header */}
      <div className="flex items-center justify-between border-b border-grid-line bg-surface-container-low p-5">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">
            tune
          </span>

          <span className="font-mono text-mono-label font-bold uppercase text-on-background">
            Hub Configuration Schema v1.2
          </span>
        </div>

        <span className="font-mono text-mono-tiny uppercase text-muted-slate">
          All fields marked * are required
        </span>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-8 p-6 md:p-8"
      >
        {/* Title */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label
              htmlFor="hub-title"
              className="flex items-center gap-2 font-display text-headline-sm font-bold text-on-background"
            >
              Hub Title
              <span className="text-status-red">*</span>
            </label>

            <span className="font-mono text-mono-tiny uppercase text-muted-slate">
              {formData.title.length} / {MAX_TITLE_LENGTH} chars
            </span>
          </div>

          <input
            id="hub-title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            maxLength={MAX_TITLE_LENGTH}
            placeholder="e.g. Advanced Distributed Systems & Cloud Computing"
            className="input border-2 border-on-background"
            aria-invalid={Boolean(errors.title)}
          />

          {errors.title && (
            <p className="field-error mt-2">
              {errors.title}
            </p>
          )}

          <div className="mt-2 flex items-center gap-2 font-mono text-mono-tiny text-muted-slate">
            <span className="material-symbols-outlined text-[14px] text-primary">
              link
            </span>

            <span>/URL:</span>

            <span className="border border-grid-line bg-surface-container px-2 py-0.5 text-on-surface">
              {formData.title.trim()
                ? formData.title
                    .trim()
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/^-|-$/g, "")
                : "[generated-from-title]"}
            </span>
          </div>
        </div>

        {/* Description */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label
              htmlFor="hub-description"
              className="flex items-center gap-2 font-display text-headline-sm font-bold text-on-background"
            >
              Description
              <span className="text-status-red">*</span>
            </label>

            <span className="font-mono text-mono-tiny uppercase text-muted-slate">
              {formData.description.length} / {MAX_DESCRIPTION_LENGTH} chars
            </span>
          </div>

          <textarea
            id="hub-description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            maxLength={MAX_DESCRIPTION_LENGTH}
            rows={4}
            placeholder="Provide course curriculum, hub objectives, weekly agendas, or research topics..."
            className="input min-h-[120px] resize-y border-2 border-on-background"
            aria-invalid={Boolean(errors.description)}
          />

          {errors.description && (
            <p className="field-error mt-2">
              {errors.description}
            </p>
          )}

          <div className="mt-2 flex items-center justify-between font-mono text-mono-tiny text-muted-slate">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[13px]">
                markdown
              </span>

              Supports basic markdown formatting
            </span>

            <span>Max 1000 characters</span>
          </div>
        </div>

        {/* Visibility */}
        <div>
          <label className="mb-3 block font-display text-headline-sm font-bold text-on-background">
            Visibility & Access Controls{" "}
            <span className="text-status-red">*</span>
          </label>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <label
              className={`relative flex cursor-pointer flex-col justify-between p-5 transition-all ${
                formData.visibility === "private"
                  ? "border-2 border-on-background bg-primary-container/10 shadow-neo"
                  : "border border-grid-line bg-surface hover:border-on-background hover:bg-surface-container-low"
              }`}
            >
              <div className="mb-2 flex items-start justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-primary">
                    lock
                  </span>

                  <span className="font-display text-[16px] font-bold text-on-background">
                    Private Hub
                  </span>
                </div>

                <input
                  type="radio"
                  name="visibility"
                  value="private"
                  checked={formData.visibility === "private"}
                  onChange={handleChange}
                  className="border-on-background text-primary focus:ring-primary"
                />
              </div>

              <p className="mb-3 font-body text-[14px] text-on-surface-variant">
                Requires invitation or admin approval to join.
                Content is restricted to accepted members.
              </p>

              <span className="inline-block self-start bg-primary px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-on-primary">
                Recommended for courses
              </span>
            </label>

            <label
              className={`relative flex cursor-pointer flex-col justify-between p-5 transition-all ${
                formData.visibility === "public"
                  ? "border-2 border-on-background bg-surface shadow-neo"
                  : "border border-grid-line bg-surface hover:border-on-background hover:bg-surface-container-low"
              }`}
            >
              <div className="mb-2 flex items-start justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-secondary">
                    public
                  </span>

                  <span className="font-display text-[16px] font-bold text-on-background">
                    Public Hub
                  </span>
                </div>

                <input
                  type="radio"
                  name="visibility"
                  value="public"
                  checked={formData.visibility === "public"}
                  onChange={handleChange}
                  className="border-grid-line text-primary focus:ring-primary"
                />
              </div>

              <p className="mb-3 font-body text-[14px] text-on-surface-variant">
                Visible in the campus directory. Any registered
                student or faculty member can view and join
                immediately.
              </p>

              <span className="inline-block self-start border border-grid-line bg-surface-container px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-muted-slate">
                Open community
              </span>
            </label>
          </div>
        </div>

        {/* Status + Capacity */}
        <div className="grid grid-cols-1 gap-6 border-t border-grid-line pt-4 md:grid-cols-2">
          {/* Status */}
          <div>
            <label className="mb-2 block font-display text-headline-sm font-bold text-on-background">
              Initial Status
            </label>

            <div className="space-y-2">
              <label
                className={`flex cursor-pointer items-start gap-3 p-3 transition-colors ${
                  formData.status === "draft"
                    ? "border-2 border-on-background"
                    : "border border-grid-line hover:border-on-background"
                } bg-surface hover:bg-surface-container-low`}
              >
                <input
                  type="radio"
                  name="status"
                  value="draft"
                  checked={formData.status === "draft"}
                  onChange={handleChange}
                  className="mt-1 border-on-background text-primary focus:ring-primary"
                />

                <div>
                  <span className="block font-mono text-mono-label font-bold uppercase text-on-background">
                    Draft Status
                  </span>

                  <span className="font-body text-[13px] text-muted-slate">
                    Only visible to you until explicitly published.
                  </span>
                </div>
              </label>

              <label
                className={`flex cursor-pointer items-start gap-3 p-3 transition-colors ${
                  formData.status === "active"
                    ? "border-2 border-on-background"
                    : "border border-grid-line hover:border-on-background"
                } bg-surface hover:bg-surface-container-low`}
              >
                <input
                  type="radio"
                  name="status"
                  value="active"
                  checked={formData.status === "active"}
                  onChange={handleChange}
                  className="mt-1 border-on-background text-primary focus:ring-primary"
                />

                <div>
                  <span className="block font-mono text-mono-label font-bold uppercase text-on-background">
                    Active Status
                  </span>

                  <span className="font-body text-[13px] text-muted-slate">
                    Ready for student onboarding immediately upon
                    creation.
                  </span>
                </div>
              </label>
            </div>
          </div>

          {/* Max Members */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label
                htmlFor="max-members"
                className="font-display text-headline-sm font-bold text-on-background"
              >
                Max Members Capacity
              </label>

              <span className="font-mono text-mono-tiny uppercase text-muted-slate">
                Optional
              </span>
            </div>

            <div className="relative">
              <input
                id="max-members"
                name="maxMembers"
                type="number"
                min="1"
                value={formData.maxMembers}
                onChange={handleChange}
                placeholder="Unlimited"
                className="input border-2 border-on-background pr-12 font-mono"
              />

              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[20px] text-muted-slate">
                groups
              </span>
            </div>

            {errors.maxMembers && (
              <p className="field-error mt-2">
                {errors.maxMembers}
              </p>
            )}

            <p className="mt-2 font-mono text-mono-tiny uppercase text-muted-slate">
              Leave blank for unlimited student enrollment.
              Integer &gt;= 1.
            </p>
          </div>
        </div>

        {/* API error */}
        {createError && (
          <div
            role="alert"
            className="border-2 border-status-red bg-red-50 p-4 text-sm font-medium text-status-red"
          >
            {createError}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col items-center justify-between gap-4 border-t-2 border-on-background pt-6 sm:flex-row">
          <button
            type="button"
            onClick={onCancel}
            disabled={creating}
            className="w-full border border-on-background bg-surface px-6 py-3 font-mono text-mono-label uppercase tracking-wider text-on-surface transition-colors hover:bg-surface-container disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            Cancel
          </button>

          <div className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
            <button
              type="button"
              disabled={creating}
              className="w-full border border-on-background bg-surface px-6 py-3 font-mono text-mono-label uppercase tracking-wider text-on-surface shadow-neo transition-all hover:bg-surface-container disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
            >
              Save as Draft
            </button>

            <button
              type="submit"
              disabled={creating}
              className="flex w-full items-center justify-center gap-2 border-2 border-on-background bg-primary-container px-8 py-3 font-mono text-mono-label font-bold uppercase tracking-wider text-white shadow-neo transition-all hover:bg-primary disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              <span>
                {creating ? "Creating..." : "Create Hub"}
              </span>

              {!creating && (
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "18px" }}
                >
                  arrow_forward
                </span>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateHubForm;