#%%
#import required libraries
from sklearn.datasets import load_iris
from sklearn.cluster import KMeans
from sklearn.metrics import silhouette_samples
from sklearn.decomposition import PCA

import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np

# %%
#load the data 
X = load_iris().data
#%%
# Hyperparameter tuning: use the elbow method to determine the optimal k
inertia = []
n = 6
for k in range(1, n+1):
    kmeans = KMeans(k, n_init = 'auto')
    kmeans.fit(X)
    inertia.append(kmeans.inertia_)
# %%
# Elbow method plot
# Select k=3
sns.lineplot(x = range(1, n+1), y = inertia,marker='o')
plt.xlabel('Number of K-means clusters')
plt.ylabel('Inertia (WCSS)')
plt.title("Elbow method, Iris dataset")
plt.text(
    0.5, 0.95,  # Position (x, y) in axis coordinates
    "Created by Kevin Nguyen",  # Text
    fontsize=10, color='gray', alpha=0.7, ha='center', va='center', transform=plt.gca().transAxes
)
plt.savefig('elbow_method.png', dpi=300, bbox_inches='tight')
plt.show()

#%%
# Once optimal k has been selected, run K-means
kmeans = KMeans(n_clusters=3)
y_pred = kmeans.fit_predict(X)

# Get cluster centers and labels
print("Cluster Centers:", kmeans.cluster_centers_)
print("Labels:", kmeans.labels_)

# %%
# Reduce dimensionality with Principal Component Analysis (PCA) to plot clusters in two dimensions
pca = PCA(n_components=2)
X_pca = pca.fit_transform(X)

centroids_pca = pca.transform(kmeans.cluster_centers_)

df_pca = pd.DataFrame(data=X_pca, columns=['Principal Component 1', 'Principal Component 2'])
df_pca['cluster'] = y_pred + 1

# Plot clusters and centroids
sns.scatterplot(data=df_pca, x='Principal Component 1', y='Principal Component 2', hue='cluster', 
                palette='deep',legend='full')
plt.scatter(centroids_pca[:, 0], centroids_pca[:, 1], c='black', marker='o', s=100, label='Centroids')
plt.title("K-Means cluster plot, Iris dataset")
plt.legend(title='Clusters')
# Add watermark/credit
plt.text(
    0.5, 0.95,  # Position (x, y) in axis coordinates
    "Created by Kevin Nguyen",  # Text
    fontsize=10, color='gray', alpha=0.7, ha='center', va='center', transform=plt.gca().transAxes
)
plt.savefig('clustering_plot.png', dpi=300, bbox_inches='tight')
plt.show()


# %%
# Diagnostics
cluster_labels = np.unique(y_pred)
silhouette_vals = silhouette_samples(X, y_pred)

y_ax_lower, y_ax_upper = 0, 0
yticks = []
for label in cluster_labels:
    c_silhouette_vals = silhouette_vals[y_pred == label]
    c_silhouette_vals.sort()
    y_ax_upper += len(c_silhouette_vals)
    plt.barh(range(y_ax_lower, y_ax_upper), c_silhouette_vals)
    yticks.append((y_ax_lower + y_ax_upper) / 2.)
    y_ax_lower += len(c_silhouette_vals)
    
silhouette_avg = np.mean(silhouette_vals)
plt.axvline(silhouette_avg, color="red",linestyle="--") # plot mean silhouette value as vertical line
plt.yticks(yticks, cluster_labels + 1)
plt.title("Silhouette plot, Iris dataset")
plt.ylabel('Cluster')
plt.xlabel('Silhouette coefficient')

plt.savefig('silhouette_k_means.png', dpi=300, bbox_inches='tight')
# %%
