import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ClusteringGuide() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        <section>
          <h1 className="text-3xl font-bold mb-4">Clustering in Machine Learning</h1>
          <p className="text-lg">
            Clustering is an unsupervised learning technique used to group data points into clusters based on their similarity. It is widely used in applications like customer segmentation, anomaly detection, and image compression.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">1. K-Means Clustering</h2>
          <p className="text-base">
            K-Means is a centroid-based algorithm that partitions data into <em>k</em> clusters. It minimizes the sum of squared distances between data points and their cluster centroids.
          </p>
          <h3 className="text-xl font-bold mt-4">How It Works</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Initialize <em>k</em> centroids randomly.</li>
            <li>Assign each data point to the nearest centroid.</li>
            <li>Recalculate centroids as the mean of all points in a cluster.</li>
            <li>Repeat until centroids stabilize or a maximum number of iterations is reached.</li>
          </ol>
          <h3 className="text-xl font-bold mt-4">Mathematical Formulation</h3>
          <p className="text-base">
            The objective is to minimize the within-cluster sum of squares (WCSS):
          </p>
          <pre className="bg-gray-800 text-white p-4 rounded text-sm">
            WCSS = Σ Σ ||xᵢ - μⱼ||²
          </pre>
          <p className="text-sm text-gray-600">
            where <em>xᵢ</em> is a data point, <em>μⱼ</em> is the centroid of cluster <em>j</em>, and || || denotes the Euclidean distance.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">2. Hierarchical Clustering</h2>
          <p className="text-base">
            Hierarchical clustering builds a tree-like structure (dendrogram) to represent nested clusters. It can be agglomerative (bottom-up) or divisive (top-down).
          </p>
          <h3 className="text-xl font-bold mt-4">How It Works</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Start with each data point as its own cluster.</li>
            <li>Merge the two closest clusters based on a distance metric (e.g., Euclidean, Manhattan).</li>
            <li>Repeat until all points belong to a single cluster.</li>
          </ol>
          <h3 className="text-xl font-bold mt-4">Mathematical Formulation</h3>
          <p className="text-base">
            The distance between clusters can be calculated using methods like:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Single Linkage:</strong> Minimum distance between points in two clusters.</li>
            <li><strong>Complete Linkage:</strong> Maximum distance between points in two clusters.</li>
            <li><strong>Average Linkage:</strong> Average distance between all points in two clusters.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">3. DBSCAN (Density-Based Spatial Clustering)</h2>
          <p className="text-base">
            DBSCAN groups points based on density, identifying clusters of high density and marking outliers as noise. It does not require specifying the number of clusters in advance.
          </p>
          <h3 className="text-xl font-bold mt-4">How It Works</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Define two parameters: <em>ε</em> (radius) and <em>minPts</em> (minimum points).</li>
            <li>Classify points as core, border, or noise based on density.</li>
            <li>Expand clusters from core points, including border points within <em>ε</em>.</li>
          </ol>
          <h3 className="text-xl font-bold mt-4">Mathematical Formulation</h3>
          <p className="text-base">
            A point is a core point if it has at least <em>minPts</em> neighbors within a radius <em>ε</em>. The algorithm iteratively expands clusters from core points.
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}