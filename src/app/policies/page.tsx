export default function PoliciesPage() {
  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold">Policies</h1>

      <section className="mt-6">
        <h2 className="font-semibold">Cancellation</h2>
        <p className="mt-2 text-gray-700">
          If weather or safety becomes an issue, we’ll reschedule or refund—your call.
          For guest cancellations, please provide 72 hours’ notice.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="font-semibold">Weather</h2>
        <p className="mt-2 text-gray-700">
          I monitor wind, tide, and radar closely. If it won’t be a good time on the water, we won’t go.
          Comfort and safety always win.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="font-semibold">Safety</h2>
        <p className="mt-2 text-gray-700">
          USCG-required safety equipment aboard. No glass on deck. Life jackets for all sizes.
          Let me know about any mobility considerations.
        </p>
      </section>
    </div>
  );
}
